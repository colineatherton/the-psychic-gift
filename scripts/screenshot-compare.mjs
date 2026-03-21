/**
 * Screenshot comparison script — prod vs preview
 * Usage:
 *   node scripts/screenshot-compare.mjs <preview-url>
 *
 * Screenshots land in ~/Desktop/screenshots/{prod,preview}/{viewport}/{page}.png
 *
 * Prerequisites: npx playwright install chromium
 */

import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { join } from "path";
import { homedir } from "os";

const PROD = "https://www.thepsychicgift.com";
const PREVIEW = process.argv[2];

if (!PREVIEW) {
  console.error("Usage: node scripts/screenshot-compare.mjs <preview-url>");
  process.exit(1);
}

const PAGES = [
  { name: "home", path: "/" },
  { name: "call-a-psychic-now", path: "/call-a-psychic-now" },
  { name: "clairvoyant-readings", path: "/clairvoyant-readings" },
  { name: "how-psychic-readings-work", path: "/how-psychic-readings-work" },
  { name: "psychic-phone-readings", path: "/psychic-phone-readings" },
  { name: "our-psychics", path: "/our-psychics" },
  { name: "offers", path: "/offers" },
  { name: "contact", path: "/contact" },
  { name: "reader-profile-adele", path: "/psychic-readers/adele-3622" },
];

const VIEWPORTS = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 900 },
];

const OUT_DIR = join(homedir(), "Desktop", "screenshots");
const STAGING_PASSWORD = "i4c";

/**
 * Pre-set cookie consent in localStorage so the banner never appears.
 * Must be added to every new page before navigation.
 */
async function suppressCookieBanner(page) {
  await page.addInitScript(() => {
    localStorage.setItem("cookie-consent", "accepted");
  });
}

/**
 * Authenticate through the Vercel staging gate (preview only).
 * Navigates to /staging-gate, submits the password, and waits for the redirect.
 */
async function passStagingGate(page, baseUrl) {
  console.log(`  [auth] Passing staging gate...`);
  await page.goto(`${baseUrl}/staging-gate`, {
    waitUntil: "networkidle",
    timeout: 30_000,
  });
  const passwordInput = page.locator('input[type="password"]').first();
  const hasGate = await passwordInput.isVisible({ timeout: 5000 }).catch(() => false);
  if (!hasGate) {
    console.log(`  [auth] No staging gate found — continuing`);
    return;
  }
  await passwordInput.fill(STAGING_PASSWORD);
  await page.keyboard.press("Enter");
  await page.waitForURL((url) => !url.pathname.includes("staging-gate"), {
    timeout: 10_000,
  }).catch(() => {});
  console.log(`  [auth] Staging gate passed`);
}

/** Try to capture the ReaderAvailableAlert snackbar if it appears naturally */
async function tryCaptureAlert(page, dir, vpName) {
  const snackbar = page.locator('[role="presentation"]').filter({
    has: page.locator("text=/now available/i"),
  });
  const visible = await snackbar.isVisible({ timeout: 8000 }).catch(() => false);
  if (visible) {
    console.log(`    [alert] Reader available banner visible — capturing`);
    await page.screenshot({
      path: join(dir, "reader-available-alert.png"),
      fullPage: false, // viewport only so the snackbar is prominent
    });
  } else {
    console.log(`    [alert] No reader available banner (depends on live feed)`);
  }
}

/** Open the ReaderModal by clicking the first "Choose Call Options" button */
async function captureModal(page, baseUrl, dir) {
  await page.goto(`${baseUrl}/our-psychics`, {
    waitUntil: "networkidle",
    timeout: 30_000,
  });

  const btn = page.getByRole("button", { name: /choose call options/i }).first();
  const btnVisible = await btn.isVisible({ timeout: 5000 }).catch(() => false);

  if (!btnVisible) {
    console.log(`    [modal] No "Choose Call Options" button found — skipping`);
    return;
  }

  await btn.click();
  // Wait for modal to fully open
  await page.waitForSelector('[role="dialog"]', { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(400);

  console.log(`    [modal] Capturing modal — step 1 (call options)`);
  await page.screenshot({
    path: join(dir, "reader-modal-step1.png"),
    fullPage: false,
  });

  // Try to advance to step 2 (accordion / call flow) if there's a continue button
  const continueBtn = page
    .locator('[role="dialog"]')
    .getByRole("button", { name: /call now|continue|choose/i })
    .first();
  if (await continueBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await continueBtn.click();
    await page.waitForTimeout(400);
    console.log(`    [modal] Capturing modal — step 2 (call flow)`);
    await page.screenshot({
      path: join(dir, "reader-modal-step2.png"),
      fullPage: false,
    });
  }
}

async function screenshotSite(browser, baseUrl, label, { isPreview = false } = {}) {
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    page.on("dialog", (d) => d.dismiss().catch(() => {}));

    // Pre-set cookie consent so the banner never renders
    await suppressCookieBanner(page);

    // Authenticate through the staging gate once per context (preview only)
    if (isPreview) {
      await passStagingGate(page, baseUrl);
    }

    const vpDir = join(OUT_DIR, label, vp.name);
    await mkdir(vpDir, { recursive: true });

    // --- Standard full-page screenshots ---
    for (const pg of PAGES) {
      const url = `${baseUrl}${pg.path}`;
      console.log(`  [${label}/${vp.name}] ${url}`);
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });

        // On /our-psychics, also check for the reader available alert
        if (pg.path === "/our-psychics") {
          await tryCaptureAlert(page, vpDir, vp.name);
        }

        await page.screenshot({
          path: join(vpDir, `${pg.name}.png`),
          fullPage: true,
        });
      } catch (err) {
        console.warn(`    WARN: ${err.message}`);
      }
    }

    // --- Modal screenshots (viewport only, not full-page) ---
    console.log(`  [${label}/${vp.name}] reader modal`);
    try {
      await captureModal(page, baseUrl, vpDir);
    } catch (err) {
      console.warn(`    WARN (modal): ${err.message}`);
    }

    await context.close();
  }
}

(async () => {
  const browser = await chromium.launch();

  console.log(`\nCapturing PROD (${PROD})...`);
  await screenshotSite(browser, PROD, "prod");

  console.log(`\nCapturing PREVIEW (${PREVIEW})...`);
  await screenshotSite(browser, PREVIEW, "preview", { isPreview: true });

  await browser.close();

  console.log(`\nDone. Output:`);
  console.log(`  ${OUT_DIR}/prod/`);
  console.log(`  ${OUT_DIR}/preview/`);
  console.log(`\nFiles per viewport:`);
  console.log(`  home.png, call-a-psychic-now.png, clairvoyant-readings.png,`);
  console.log(`  how-psychic-readings-work.png, psychic-phone-readings.png,`);
  console.log(`  our-psychics.png, offers.png, contact.png,`);
  console.log(`  reader-modal-step1.png, reader-modal-step2.png,`);
  console.log(`  reader-available-alert.png (only if a reader goes online during capture)`);
})();

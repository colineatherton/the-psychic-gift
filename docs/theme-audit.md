# Theme Audit — Issue #3

## Critical

### 1. ~~Montserrat font hardcoded but never loaded (124 instances)~~ ✅ FIXED

Removed all 124 `fontFamily: "Montserrat Variable, sans-serif"` references (commit `e9fc277`). All components now inherit Roboto from the theme.

---

### 2. Icons invisible in dark mode (all 15 icons, 40+ usages)

**Problem:** 124 `fontFamily: "Montserrat Variable, sans-serif"` references are scattered across components, but Montserrat is never imported or loaded anywhere. The theme only loads Roboto. These components fall back to the OS `sans-serif` — not Roboto — causing silent, inconsistent typography across the site.

**Affected files (partial):**
- `src/app/(main)/offers/OffersContent.tsx` (4 instances — hero heading, step headings, callout)
- `src/components/Footer/Footer.tsx` (2 instances)
- `src/components/CookieConsent/CookieConsent.tsx` (3 instances)
- `src/components/ReaderCard/ReaderCard.tsx` (3 instances — reader name, specialty, description)
- `src/app/(main)/contact/ContactContent.tsx`
- `src/app/(main)/call-a-psychic-now/CallAPsychicNowContent.tsx`
- `src/app/(main)/clairvoyant-readings/ClairvoyantReadingsContent.tsx`
- `src/app/(main)/how-psychic-readings-work/HowPsychicReadingsWork.tsx`
- `src/app/(main)/telephone-psychics/TelephonePsychicsContent.tsx`
- + 20 more files

**Problem:** All 15 PNGs in `/public/icons/` are dark-coloured artwork designed for light backgrounds. `FeatureCard` in dark mode renders on `primary.dark` = `#745ddd` (medium purple). Dark icon on medium-dark purple = near-invisible. Used across 8 pages (40+ instances).

**Affected icons:** `book`, `card`, `clock`, `compass`, `crystal-ball`, `gift`, `hands-heart`, `heart-hands-2`, `lock`, `phone`, `quote`, `readers`, `search`, `speech`, `stars`

**Non-icon images (theme-aware ✓):** Logo and trust badges already switch variants by mode.

**Fix options:**
- A) **CSS filter in `FeatureCard`** — add `filter: "brightness(0) invert(1)"` when `theme.palette.mode === "dark"`. One-line fix, zero new assets. Works well for monochrome icons. `OffersContent` already does this as a workaround.
- B) **Light variants** — create `/public/icons/light/*.png` set and switch path by mode. Better quality, more work, requires design asset creation.

**Recommended:** Option A for now — ships immediately with no design dependency. Option B is the ideal end state.

**Other icon-adjacent issues:**
- `Testimonial` — `/icons/quote.png` — check background colour in context
- `WhyPsychicGift` — `/icons/crystal-ball.png` — used alongside theme-aware logo

---

### 3. `AboutImageSection` overlay hardcoded to light mode

**Problem:** `src/app/(main)/about/AboutContent.styles.ts` lines 41-48 — the `::after` overlay uses a hardcoded `rgba(248,247,252,0.95)` fade (light lavender). In dark mode, the page background is `#18122B` but this overlay is near-white, creating a jarring light rectangle over the image.

**Fix:** Make the gradient conditional on theme mode — use `theme.palette.background.default` (which is `#f8f7ff` in light, `#18122B` in dark) for the rgba values.

---

## High

### 4. No typography scale defined in theme

**Problem:** `theme.ts` defines only `fontFamily: roboto.style.fontFamily` under `typography`. No variants (h1–h6, body1, body2, subtitle1, etc.) are customised. Components compensate with scattered hardcoded `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing` in sx props.

**Impact:** No single source of truth for text sizing. Changing heading sizes requires hunting across every file.

**Fix:** Define `typography` variants in `createTheme` — at minimum h1–h4, body1, body2, subtitle1.

---

### 5. Hardcoded hex colors (should use theme tokens)

**Problem:** Several components bypass the theme with raw hex values.

| File | Values |
|------|--------|
| `src/app/staging-gate/page.tsx` | `#18122B`, `#2a2140`, `#745ddd`, `#a99fd1`, `#ff6b6b` |
| `src/app/(main)/offers/OffersContent.tsx` | `#18122B` in gradient |
| `src/app/opengraph-image.tsx` | `#c6bbf4` |
| `src/components/ReaderListItem/ReaderListItem.tsx` | `#fff` |

`staging-gate` is internal-only so lower priority. `OffersContent` and `ReaderListItem` are user-facing.

---

## Medium

### 6. Hardcoded rgba values (opacity overlays)

Widely used for semi-transparent overlays on dark backgrounds — `rgba(255,255,255,0.1)` etc. These work visually but are not themed, so they won't adapt if palette changes.

**Most common pattern:** `rgba(255,255,255,0.X)` in AppBar, MobileMenu, CookieConsent, OfferBanner, CallOptionCard, IconToggle.

These could be extracted to theme constants or `alpha()` helpers from MUI, but are lower priority than font consistency.

---

### 7. Hardcoded fontSize / fontWeight in sx props

Widespread. Examples:
- `src/components/AppBar/AppBar.tsx`: `"0.65rem"`, `"1.35rem"`, `"0.88rem"`
- `src/components/PhoneCallout/PhoneCallout.tsx`: `"1.8rem"`, `"2rem"`, `"0.95rem"`
- `src/app/(main)/offers/OffersContent.tsx`: `"0.8rem"`, `"4rem"`, `"7rem"`, `"1.4rem"`, `"1.6rem"`

Will reduce naturally once a typography scale is added to the theme (issue 2 above).

---

## Low / Won't Fix

### 8. text.secondary not currently misused

`text.secondary` = `#f8f7ff` (near-white) in light mode — dangerous on white Paper. No current usages found as an explicit `color` prop. The risk is real but not currently materialised. Add to gotchas in CLAUDE.md as a reminder (already there).

### 9. staging-gate.tsx hardcoded styles

Internal page, not user-facing. Low priority.

### 10. opengraph-image.tsx hardcoded colors

This file uses the Satori renderer which can't access the MUI theme anyway. Hardcoded values are unavoidable here.

---

## Recommended Fix Order

1. ~~**Fix Montserrat**~~ ✅ Done
2. **Fix icons in dark mode** — add CSS filter to `FeatureCard` + `Testimonial`. One-line change per component, zero assets needed. ~15 min.
3. **Fix `AboutImageSection` overlay** — make gradient use `theme.palette.background.default`. ~10 min.
4. **Add typography scale to theme** — defines h1–h4, body variants. Enables removing most hardcoded fontSize. ~1 hour.
5. **Fix OffersContent + ReaderListItem hex colors** — user-facing, easy wins. ~15 min.
6. **Sweep hardcoded fontSize** — follow-on after step 4. ~1 hour.
7. **Icon light variants (design)** — create `/public/icons/light/` set. Design dependency, longer tail.

---

*Audit run: 2026-03-21*

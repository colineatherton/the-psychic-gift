# Mobile Layout Audit

**Date:** 2026-03-13
**Method:** Static code analysis (not a visual audit — a visual check on a real device may surface additional issues)

---

## HIGH — Breaks layout on mobile

### H1 · Unresponsive grid columns across all service pages
**Files:**
- `src/app/(main)/psychic-phone-readings/PsychicPhoneReadingsContent.tsx` (lines 63, 70, 78, 95, 102, 109, 154, 161, 190, 197, 204)
- `src/app/(main)/telephone-psychics/TelephonePsychicsContent.tsx` (lines 96, 103, 110, 155, 162)
- `src/app/(main)/clairvoyant-readings/ClairvoyantReadingsContent.tsx` (lines 96, 103, 110, 155, 162)
- `src/app/(main)/call-a-psychic-now/CallAPsychicNowContent.tsx` (lines 96, 103, 110, 139, 146)

All 4 service pages use `<Grid size={4}>` (3-col) and `<Grid size={6}>` (2-col) with no `xs` breakpoint. On mobile these columns stay at 33%/50% width, cramming feature cards side by side.

**Fix:** Change to `size={{ xs: 12, md: 4 }}` and `size={{ xs: 12, md: 6 }}` throughout.

---

### H2 · WhyPsychicGift section: image/text split not responsive
**File:** `src/components/Sections/WhyPsychicGift/WhyPsychicGift.tsx` (lines 89, 98)

Uses `size={3}` / `size={9}` with no `xs` breakpoint — on mobile the image is squashed to 25% width and text gets 75%.

**Fix:** `size={{ xs: 12, md: 3 }}` / `size={{ xs: 12, md: 9 }}` so they stack vertically on mobile.

---

### H3 · Hero section: unconditional right padding
**File:** `src/components/Sections/Hero/Hero.tsx` (line 149)

`paddingRight: theme.spacing(6)` is applied at all breakpoints on the text `Grid` column. On mobile (full width) this wastes ~48px of horizontal space.

**Fix:** `sx={{ paddingRight: { xs: 0, md: theme.spacing(6) } }}`

---

## MEDIUM — Looks bad but doesn't fully break

### M1 · TrustBadges: horizontal row doesn't collapse on mobile
**File:** `src/components/Sections/TrustBadges/TrustBadges.tsx` (line 21)
**Also:** `src/components/TrustBadge/TrustBadge.tsx` (line 18)

`Stack direction="row"` with no responsive override forces 3 badges into a horizontal row at all sizes. Each badge has `maxWidth: 250px` with no responsive variant — may overflow or get very small on mobile.

**Fix:** `direction={{ xs: "column", sm: "row" }}` on the Stack, or reduce badge `maxWidth` on xs.

---

### M2 · ContactContent: quick links grid too tight on xs
**File:** `src/app/(main)/contact/ContactContent.tsx` (line ~443)

Quick links use `size={{ xs: 6, sm: 3 }}` — 2 columns on mobile may be too cramped depending on link text length.

**Fix:** Consider `size={{ xs: 12, sm: 6, md: 3 }}`.

---

### M3 · OffersContent: large £5 heading with minimal padding on xs
**File:** `src/app/(main)/offers/OffersContent.tsx` (lines ~57, ~107)

Hero card has `p: { xs: 4, md: 6 }` and the £5 heading uses `fontSize: { xs: "4rem", md: "7rem" }`. On small phones the combination could cause overflow or text clipping.

**Fix:** Check visually on a real device; may need to reduce `xs` font size or increase padding.

---

### M4 · AppBar: `whiteSpace: "nowrap"` on phone numbers
**File:** `src/components/AppBar/AppBar.tsx` (lines 183, 299)

Phone numbers use `whiteSpace: "nowrap"` — fine for the breakpoints currently defined (765px, 475px), but on devices narrower than ~400px the compact row could overflow horizontally.

**Fix:** Verify on a real 360px-wide device; may need to hide intermediate number row at a lower breakpoint.

---

## LOW — Minor / cosmetic

### L1 · ReaderGrid: fixed spacing on all breakpoints
**File:** `src/components/ReaderGrid/ReaderGrid.tsx` (line ~35)

`spacing={4}` is fixed — on mobile with full-width cards this produces excessive vertical gaps.

**Fix:** `spacing={{ xs: 2, md: 4 }}`

---

### L2 · OfferBanner: long message may wrap awkwardly on very small screens
**File:** `src/components/OfferBanner/OfferBanner.tsx`

The banner message (emoji + phone number + quote code) is a single line. On < 360px screens it may wrap mid-sentence in an ugly way. Font sizing is already responsive.

**Fix:** Test on 360px device; consider shortening message for xs.

---

## Not caught by code analysis — needs visual check

- Real iPhone rendering (Charlotte flagged iPhone 16 specifically — site "not sitting properly within the parameters")
- Reader cards in grid on mobile — image/text proportion
- Modal open/close on mobile (scroll lock, height, close button reachability)
- Hamburger menu behaviour on various mobile sizes
- Pinch-zoom / viewport meta tag behaviour
- Form inputs on mobile (Contact page) — keyboard behaviour, label overlap

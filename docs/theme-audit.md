# Theme Audit — Issue #3

## Critical

### 1. Montserrat font hardcoded but never loaded (124 instances)

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

**Fix options (pick one):**
- A) Load Montserrat via `next/font/google` in `theme.ts` and set it as `typography.fontFamily` — makes it the site-wide font and all hardcoded references become correct automatically
- B) Remove all `fontFamily` overrides and stick with Roboto — simpler, fewer moving parts
- C) Use Montserrat selectively as a display/heading font — add it to the theme as a second font variable and only apply it to headings

**Recommended:** Option A or C — Montserrat appears intentional for headings/display text. Option A is lowest effort.

---

## High

### 2. No typography scale defined in theme

**Problem:** `theme.ts` defines only `fontFamily: roboto.style.fontFamily` under `typography`. No variants (h1–h6, body1, body2, subtitle1, etc.) are customised. Components compensate with scattered hardcoded `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing` in sx props.

**Impact:** No single source of truth for text sizing. Changing heading sizes requires hunting across every file.

**Fix:** Define `typography` variants in `createTheme` — at minimum h1–h4, body1, body2, subtitle1.

---

### 3. Hardcoded hex colors (should use theme tokens)

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

### 4. Hardcoded rgba values (opacity overlays)

Widely used for semi-transparent overlays on dark backgrounds — `rgba(255,255,255,0.1)` etc. These work visually but are not themed, so they won't adapt if palette changes.

**Most common pattern:** `rgba(255,255,255,0.X)` in AppBar, MobileMenu, CookieConsent, OfferBanner, CallOptionCard, IconToggle.

These could be extracted to theme constants or `alpha()` helpers from MUI, but are lower priority than font consistency.

---

### 5. Hardcoded fontSize / fontWeight in sx props

Widespread. Examples:
- `src/components/AppBar/AppBar.tsx`: `"0.65rem"`, `"1.35rem"`, `"0.88rem"`
- `src/components/PhoneCallout/PhoneCallout.tsx`: `"1.8rem"`, `"2rem"`, `"0.95rem"`
- `src/app/(main)/offers/OffersContent.tsx`: `"0.8rem"`, `"4rem"`, `"7rem"`, `"1.4rem"`, `"1.6rem"`

Will reduce naturally once a typography scale is added to the theme (issue 2 above).

---

## Low / Won't Fix

### 6. text.secondary not currently misused

`text.secondary` = `#f8f7ff` (near-white) in light mode — dangerous on white Paper. No current usages found as an explicit `color` prop. The risk is real but not currently materialised. Add to gotchas in CLAUDE.md as a reminder (already there).

### 7. staging-gate.tsx hardcoded styles

Internal page, not user-facing. Low priority.

### 8. opengraph-image.tsx hardcoded colors

This file uses the Satori renderer which can't access the MUI theme anyway. Hardcoded values are unavoidable here.

---

## Recommended Fix Order

1. **Fix Montserrat** — load the font (or decide to drop it). Fixes 124 silent fallbacks. ~30 min.
2. **Add typography scale to theme** — defines h1–h4, body variants. Enables removing most hardcoded fontSize. ~1 hour.
3. **Fix OffersContent + ReaderListItem hex colors** — user-facing, easy wins. ~15 min.
4. **Sweep hardcoded fontSize** — follow-on after step 2. ~1 hour.

---

*Audit run: 2026-03-21*

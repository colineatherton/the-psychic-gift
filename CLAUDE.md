# Claude Code — Project Guidelines

## Project

**The Psychic Gift** — psychic phone reading service
- **Repo:** https://github.com/colineatherton/the-psychic-gift
- **Project board:** https://github.com/users/colineatherton/projects/3/views/1 (project ID: `PVT_kwHOAKeW5s4BIzAl`)
- **Vercel:** PR previews deploy automatically on push

## Tech Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **UI:** MUI v7 with custom purple theme
- **Email:** Resend (`RESEND_API_KEY`)
- **Spam protection:** reCAPTCHA v3 (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`)
- **Analytics:** Google Analytics via cookie consent (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- **Package manager:** npm

## Branch Naming

`feature/` · `fix/` · `chore/`

## PR Workflow

- **Always branch from `origin/main`** — run `git fetch origin && git checkout -b <branch> origin/main` before starting any new branch. Never branch from another feature/fix branch.
- **Don't rebase PRs proactively** — Vercel handles it. Only rebase when asked.
- Get preview URL: `gh api repos/colineatherton/the-psychic-gift/deployments/<id>/statuses --jq '.[0].target_url'`
- Check visual feedback via screenshots on `~/Desktop` — use `/check-screenshots`

## GitHub Issues

Always create issues and add to the project board. Use `/new-issue` skill.
GraphQL project mutation: `addProjectV2ItemById` with `projectId: "PVT_kwHOAKeW5s4BIzAl"`

## Permissions

Common commands are pre-approved in `.claude/settings.json`. When you accept a new permission
prompt, it saves to `settings.local.json` (local only). If a command is used repeatedly,
add it to `settings.json` and include it in the next PR.

## MVP Status

**Shipped:** #41 Footer + Terms · #42 Cookie consent + GA · #43 CAP compliance · #44 Contact/Privacy + Resend · #45 Modal colours

**Remaining:**
- #51 — Vercel env vars (Resend + reCAPTCHA) — owner action needed
- #10 — Phone numbers by logo (needs design)
- #5 — Mobile/responsive fixes (needs design)
- Theme review · Responsive review

## CRO & SEO Standards

Every layout change must be evaluated against both conversion and search:

- **Never hide content with `display: none` that carries SEO value** — H1, H2, body copy, and structured data must remain in the DOM and ideally visible on all breakpoints. Google crawls mobile-first; hidden content may be deprioritised.
- **H1 is sacred** — one per page, keyword-rich, always above the fold on every breakpoint.
- **Above-the-fold priority on mobile**: phone number + primary CTA must be visible without scrolling.
- **Body copy matters** — trust signals, value props, and calls to action in prose form support both rankings and conversion. Don't silently drop them when rearranging layouts.
- **CTA placement**: primary CTA should appear before the fold and again after key trust/value content (double CTA pattern).
- When in doubt, ask: *would a first-time visitor know what this site does, why to trust it, and how to act — within 3 seconds on mobile?*

## Known Gotchas

- **AppBar z-index:** `StyledAppBar` uses `zIndex: drawer + 1` = **1201** — overlays need `drawer + 2`
- **MUI TextField on purple backgrounds:** default focus colour is `primary.main` — invisible on purple `Paper`. Always override focused outline + label with `primary.dark` (light) / `white` (dark)
- **`text.secondary` is near-white (`#f8f7ff`) in light mode** — invisible on white `Paper`. Use `secondary.main` (`#7a8486`) for muted text on light backgrounds instead.
- **Layout is `"use client"`** — all providers are client-side

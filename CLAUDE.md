# Claude Code — Project Guidelines

## Project

**The Psychic Gift** — Next.js / MUI / TypeScript
- **Repo:** https://github.com/colineatherton/the-psychic-gift
- **Project board:** https://github.com/users/colineatherton/projects/3/views/1
- **Vercel:** PR previews deploy automatically on push

## Permissions

The following are pre-approved — no need to confirm before doing them:

- `git fetch`, `git checkout`, `git rebase`, `git commit`, `git push`
- `git push --force-with-lease` on feature branches
- Creating GitHub issues and adding them to the project board
- Reading screenshots from `~/Desktop`

## Workflow Preferences

- **Don't proactively rebase PRs** — Vercel handles it automatically. Only rebase when explicitly asked.
- **Check screenshots for visual feedback** — user shares screenshots from `~/Desktop`; always read the latest ones when reviewing UI issues.
- **Create GitHub issues for tracked tasks**, not just local tasks. Add them to the project board at `PVT_kwHOAKeW5s4BIzAl`.
- **Keep responses concise** — no filler, lead with the action.
- **Don't auto-commit or auto-push** without doing the work first.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** MUI (Material UI) with custom theme
- **Language:** TypeScript
- **Email:** Resend (`RESEND_API_KEY`)
- **Spam protection:** reCAPTCHA v3 (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`)
- **Analytics:** Google Analytics via consent (`NEXT_PUBLIC_GA_MEASUREMENT_ID`)
- **Package manager:** npm

## Branch Naming

- `feature/` — new features
- `fix/` — bug fixes
- `chore/` — non-functional changes

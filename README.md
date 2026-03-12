# The Psychic Gift

Psychic phone reading service — Next.js web app.

- **Production:** https://thepsychicgift.co.uk
- **GitHub Project Board:** https://github.com/users/colineatherton/projects/3/views/1

## Stack

- **Next.js 15** (App Router) + TypeScript
- **MUI v7** — custom purple theme
- **Vercel** — hosting + PR preview deployments
- **Resend** — contact form email delivery
- **reCAPTCHA v3** — contact form spam protection
- **Google Analytics** — behind cookie consent

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```env
# Contact form
RESEND_API_KEY=
CONTACT_EMAIL=

# reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Scripts

```bash
npm run dev        # Dev server (Turbopack)
npm run build      # Production build
npm run lint       # ESLint
npm run storybook  # Component explorer
```

## Branch Naming

`feature/` · `fix/` · `chore/`

PRs get automatic Vercel preview deployments.

# Prabin Pathak's Portfolio

A single-page portfolio: intro, about and tech stack, projects, a scroll-driven experience timeline, and a contact form. The light and dark themes follow the system setting, and a toggle lets visitors switch.

## Built With

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Radix UI Dialog, Sonner and Lucide icons

## Getting Started

Requires Node 18 or newer.

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing Content

All personal content lives in `src/constants/index.js`: name, intro, social links, about text, tech stack, projects and experience.

- **CV:** the "Download CV" button serves `public/PrabinPathakCV.pdf`. Replace that file to update it, or set `personal.cv` to `null` to hide the button.
- **Avatar:** replace `src/assets/personal/avatar.webp` with a square head-and-shoulders photo (384×384 works well).

## Contact Form

Messages are delivered to `personal.email` (prabinoid@gmail.com) through [FormSubmit](https://formsubmit.co/), with the visitor's address set as Reply-To. No account or API key is needed.

**One-time activation:** the first message sent through the form triggers an email from FormSubmit to that inbox with an "Activate Form" button. Click it once; until then, submissions are not delivered. If sending ever fails, visitors are offered an "Email me" link instead.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`, at https://prabinoid.github.io/mysite/.

One-time setup:

1. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. GitHub Pages on a free account only works for **public** repositories. A private repo needs a paid plan (GitHub Pro or above).

Asset and CV paths are relative (`base: './'` in `vite.config.js`), so the same build also works at the root of a custom domain.

# Milen Popat — Portfolio

Dark, editorial, text-forward personal portfolio: left-aligned single column,
hairline-divided rows, mono labels, one ember accent. Next.js 14 (App Router)
+ TypeScript + Tailwind CSS, Framer Motion for subtle fade-ins, GSAP
ScrollTrigger for the scrubbed About text, Lenis for smooth scrolling. Ships
as a fully static export.

## Commands

```bash
npm install       # once
npm run dev       # http://localhost:3000
npm run build     # static export → out/
```

Deploy: push to GitHub and import into Vercel (zero config — `output: "export"`
is already set), or serve the `out/` directory from any static host. Note:
opening `out/index.html` directly as a file breaks asset paths; always serve
over HTTP (`npx serve out`).

## Swapping in content

All copy lives in one file: **`data/content.ts`**. Nothing in the components
needs to change for content edits.

- **Projects** — each entry has `github` (and optional `demo`); an empty
  string renders no link.
- **Resume** — the live PDF is `public/resume.pdf` (currently the CS / 2029
  grad variant). It's a snapshot: re-copy after resume updates.
- **Headshot** — `public/headshot.jpg`, shown in About.
- **Work entries** — role, org, location, mode, dates, summary, and bullet
  list per entry; `current: true` adds the ember status dot.
- **Education / certifications / leadership / case comps** — plain arrays in
  the same file.

## Structure

- `components/sections/` — one component per page section, assembled in
  `app/page.tsx` (below-fold sections are dynamically imported).
- `components/Eyebrow.tsx` — the "— LABEL" section marker.
- `components/ListSection.tsx` — shared hairline-row list (leadership, case
  comps).
- `components/SmoothScroll.tsx` — Lenis + GSAP ticker wiring; skipped under
  `prefers-reduced-motion`.

Design tokens (colors, fonts) are in `tailwind.config.ts` — the accent is
`ember` (#ff5c38); change it there to retheme the whole site.

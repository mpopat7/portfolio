# Milen Popat — Portfolio

Apple-product-page-style personal portfolio: dark, typographic, scroll-driven.
Next.js 14 (App Router) + TypeScript + Tailwind CSS, Framer Motion for
element-level animation, GSAP ScrollTrigger for the pinned/scrubbed sections,
Lenis for smooth scrolling. Ships as a fully static export.

## Commands

```bash
npm install       # once
npm run dev       # http://localhost:3000
npm run build     # static export → out/
```

Deploy: push to GitHub and import into Vercel (zero config — `output: "export"`
is already set), or serve the `out/` directory from any static host.

## Swapping in real content

All copy lives in one file: **`data/content.ts`**. Nothing in the components
needs to change for content edits.

1. **Project links & copy** — in `data/content.ts`, each entry in `projects`
   has `github` (and optional `demo`) fields. Anything still wrapped in
   `[BRACKETS]` renders as a visible placeholder instead of a link — replace
   it with a real URL and it becomes a proper link automatically. Same for
   `[ONE-LINE DESCRIPTION]` taglines and `[TECH STACK]` chips.
2. **Resume** — drop your PDF at `public/resume.pdf`. The Contact section
   already links to `/resume.pdf`.
3. **LinkedIn** — replace `site.linkedin`'s `[LINKEDIN URL]` placeholder.
4. **Dates** — replace each `[DATE RANGE]` in the `experience` array.
5. **Profile photo** — no photo is used by design (typographic hero). To add
   one, drop it in `public/` and place an `<img>` in
   `components/sections/Hero.tsx` or `About.tsx`.
6. **Project visuals** — projects currently render abstract numbered panels
   (`ProjectVisual` in `components/ProjectCard.tsx`). To use real screenshots,
   add an optional `image` field to the `Project` type and swap the panel body
   for an `<img>`.

## How the animation system works

- **`components/SmoothScroll.tsx`** — mounts Lenis, drives it from GSAP's
  ticker, and keeps ScrollTrigger in sync. Skipped entirely under
  `prefers-reduced-motion`.
- **`components/PinnedSection.tsx`** — a tall section whose content sticks
  for its full height (CSS sticky, no scroll-jacking). Sections attach
  scrubbed GSAP timelines using the section as the trigger.
- **`components/RevealText.tsx`** — word-by-word rise-in on scroll, with a
  plain-fade fallback for reduced motion.
- **`hooks/useScrollFX.ts`** — single source of truth for "is fancy scroll
  allowed": desktop width AND no reduced-motion preference. Every pinned/
  parallax section renders a simple fade-in layout when it returns false, so
  mobile gets no pinning or scroll-jacking.

Design tokens (colors, fonts) are in `tailwind.config.ts` — the accent is
`ember` (#ff5c38); change it there to retheme the whole site.

A deliberate deviation from the original spec: no CSS `scroll-snap`. It fights
Lenis's inertia scrolling and reads as scroll-jacking; the pinned chapters
(hero fade-out, skills rail, project split-scroll) provide the one-chapter-at-
a-time feel without taking control of the wheel.

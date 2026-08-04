# portfolio

Milen's personal portfolio site: dark editorial multi-page design (/, /projects,
/work, /about). Next.js 14 App Router + TypeScript + Tailwind, Motion
(`motion/react`, the renamed Framer Motion) for reveals and scroll-linked
effects, Lenis smooth scroll. Fully static export.

## Commands

```bash
npm run dev     # dev server on :3000 (predev wipes .next, so it always starts clean)
npm run check   # typecheck only — use this to verify edits during a dev session
npm run build   # static export → out/ (builds into .next-build, then rewrites asset paths)
```

## The build vs dev-server rule (important)

Running `npm run build` while `npm run dev` is serving **breaks the dev
server's CSS** until the next source edit or dev restart — pages render bare
HTML. The build is isolated into `.next-build`, which helps, but the running
dev process still drops its compiled CSS.

- During an active dev session, verify with `npm run check`, not `npm run build`.
- If you must build, restart the dev server afterward (`Ctrl+C`, `npm run dev`).
- If the site ever looks unstyled: kill ALL stray Next processes first —
  `pkill -f next-server; pkill -f "next dev"` — then `npm run dev`. Orphaned
  `next-server` children can squat port 3000 and serve stale 404s while a new
  dev server silently binds :3001.

## Structure

- `data/content.ts` — every word of site copy; components never need edits for content.
- `components/sections/` — one component per section; pages in `app/*/page.tsx` compose them.
- `components/ui/` — the shared visual primitives. `Reveal` (scroll fade/blur-in),
  `Spotlight` (pointer-tracked glow card with the `.edge` gradient hairline from
  `globals.css`), `Counter` (stat count-up), `Backdrop` (fixed dot grid + drifts).
  Reach for these before writing a new one-off animation.
- The hero headline reveal is **CSS** (`animate-word-rise`), not JS, on purpose: its
  resting state is visible, so it can't strand at opacity 0 if the animation is skipped.
- Scroll reveals do not render in headless Chrome — `whileInView` never fires there, so
  screenshots come out blank. That is a capture artifact, not a bug; verify in a real browser.
- `scripts/make-relative.mjs` — postbuild; rewrites exported asset paths relative (depth-aware)
  so any single out/ page renders when opened via file://. Cross-page nav still needs HTTP.
- `public/headshot.jpg` and `public/resume.pdf` are **gitignored on purpose** (personal
  assets, scrubbed from history 2026-07-07). They deploy via CLI upload but never reach
  GitHub. On a fresh clone, copy them in before deploying:
  headshot ← OneDrive `Professional Stuff/8. HEADSHOTS/ent white headshot.png` (resize to
  ~900px JPEG); resume ← OneDrive `Professional Stuff/1. RESUME/CS/PDF/2029 grad/`.

## Deploy

- Live: https://milenpopat.vercel.app (Vercel project `portfolio`)
- Repo: https://github.com/mpopat7/portfolio (public — no Claude co-author trailers)
- Ship an update: commit, `git push`, then `vercel --prod --yes` from the project
  root (deploys are CLI-triggered, not git-triggered). `vercel.json` serves the
  static export from `out/`.

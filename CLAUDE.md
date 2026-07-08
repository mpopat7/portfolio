# portfolio

Milen's personal portfolio site: dark editorial multi-page design (/, /projects,
/work, /about). Next.js 14 App Router + TypeScript + Tailwind, Framer Motion
fade-ins, Lenis smooth scroll. Fully static export.

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
- `scripts/make-relative.mjs` — postbuild; rewrites exported asset paths relative (depth-aware)
  so any single out/ page renders when opened via file://. Cross-page nav still needs HTTP.
- `public/resume.pdf` — snapshot of the CS/2029-grad resume variant; re-copy after resume edits.

## Deploy

- Live: https://portfolio-ecru-zeta-91.vercel.app (Vercel project `portfolio`)
- Repo: https://github.com/mpopat7/portfolio (public — no Claude co-author trailers)
- Ship an update: commit, `git push`, then `vercel --prod --yes` from the project
  root (deploys are CLI-triggered, not git-triggered). `vercel.json` serves the
  static export from `out/`.

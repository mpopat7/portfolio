import type { ReactNode } from "react";
import McButton from "./McButton";

/**
 * Shared chrome for every non-menu page: centered title, a full-height
 * translucent panel, and a Back button pinned under it — the layout Minecraft
 * uses for Options, Statistics, and the world list.
 *
 * The panel is the only scroll container. The page itself never scrolls, so
 * the title and Back button stay put the way an in-game screen does.
 */
export default function Screen({
  title,
  children,
  maxWidth = "1180px",
}: {
  title: string;
  children: ReactNode;
  maxWidth?: string;
}) {
  return (
    <main className="relative flex h-dvh flex-col items-center overflow-hidden px-4 pb-4 pt-5 font-mc text-white">
      <div className="pointer-events-none absolute inset-0 bg-black/65" />

      <h1 className="mc-text relative z-10 mb-4 text-2xl">{title}</h1>

      <div className="relative z-10 flex w-full min-h-0 flex-1 flex-col items-center">
        <div
          className="mc-screen-panel flex w-full min-h-0 flex-1 flex-col items-center"
          style={{ maxWidth }}
        >
          {children}
        </div>

        <div className="mt-3 flex shrink-0 justify-center">
          <McButton href="/" className="w-[calc(90*var(--u))] min-w-[180px]">
            Back
          </McButton>
        </div>
      </div>
    </main>
  );
}

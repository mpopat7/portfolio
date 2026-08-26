"use client";

import { useEffect, useState } from "react";

/**
 * The yellow bouncing splash text on the Minecraft title screen. Picked on the
 * client so the static export isn't frozen with one line baked in, and so the
 * pick changes per visit the way the real one does.
 */
const LINES = [
  "Also try dashboards!",
  "650+ client domains!",
  "Now with 87% top-1 retrieval!",
  "Built from the spreadsheet up!",
  "Go Lions!",
  "Ask me about RAG!",
  "Compiles on the first try!",
  "Made in Houston!",
  "pandas, capital P!",
  "Powered by too much coffee!",
  "Ship it!",
];

export default function Splash() {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    setLine(LINES[Math.floor(Math.random() * LINES.length)]);
  }, []);

  // Reserve the row from first paint so picking a line doesn't shift the logo.
  return (
    <div
      className="pointer-events-none relative h-[calc(16*var(--u))] w-full"
      aria-hidden="true"
    >
      {line && (
        <span
          className="absolute left-1/2 top-0 origin-center -translate-y-[45%] translate-x-[calc(24*var(--u))] -rotate-[14deg] whitespace-nowrap font-mc text-mc-gold"
          style={{
            fontSize: "calc(7 * var(--u))",
            textShadow: "2px 2px 0 #3f3f00",
            animation: "mc-splash 1.2s ease-in-out infinite",
          }}
        >
          {line}
        </span>
      )}
    </div>
  );
}

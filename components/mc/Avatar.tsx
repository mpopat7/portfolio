"use client";

import { useState } from "react";

/**
 * The portrait in its item-frame border.
 *
 * public/headshot.jpg is gitignored on purpose, so a fresh clone (and any CI
 * build) has no image to load. Rather than shipping a broken <img>, fall back
 * to a drawn initials tile.
 */
export default function Avatar({
  src,
  name,
  available,
}: {
  src: string;
  name: string;
  /** Resolved at build time — false when the file isn't in public/. */
  available: boolean;
}) {
  // Runtime onError stays as a second net for a file that exists but won't decode.
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !available || failed;
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="p-1.5"
      style={{
        background: "#8b8b8b",
        boxShadow: "inset 3px 3px 0 #373737, inset -3px -3px 0 #ffffff",
      }}
    >
      {showPlaceholder ? (
        <div
          className="flex aspect-square w-full items-center justify-center text-5xl text-white"
          style={{
            background:
              "repeating-linear-gradient(45deg, #464646 0 10px, #3a3a3a 10px 20px)",
            boxShadow: "0 0 0 2px #000",
            textShadow: "3px 3px 0 #1a1a1a",
          }}
          role="img"
          aria-label={name}
        >
          {initials}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- next/image is
        // unoptimized in this static export anyway, and a plain img is the only
        // way to catch the missing-file case at runtime.
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="block aspect-square w-full object-cover"
          style={{
            objectPosition: "50% 28%",
            imageRendering: "auto",
            boxShadow: "0 0 0 2px #000",
          }}
        />
      )}
    </div>
  );
}

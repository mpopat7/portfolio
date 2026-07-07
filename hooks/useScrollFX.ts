"use client";

import { useEffect, useState } from "react";

// True only on desktop-width viewports with no reduced-motion preference.
// Starts false so the server render is always the simple, static layout;
// pinned/parallax variants mount after hydration.
export function useScrollFX() {
  const [fx, setFx] = useState(false);

  useEffect(() => {
    const width = window.matchMedia("(min-width: 768px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setFx(width.matches && !motion.matches);
    update();
    width.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      width.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  return fx;
}

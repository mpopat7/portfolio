"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { setLenis } from "@/lib/scroll";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    setLenis(lenis);

    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // reducedMotion="user" makes every motion component honour the OS setting,
  // which the CSS rule in globals.css can't do for JS-driven animation.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

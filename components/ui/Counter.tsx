"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Counts a stat up when it scrolls into view. `value` is the literal string
 * from content.ts ("87%", "+17pts", "650+"), so the numeric part is animated
 * and whatever wraps it is preserved.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const still = useReducedMotion();

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const [prefix, target, suffix] = match
    ? [match[1], parseFloat(match[2]), match[3]]
    : ["", NaN, ""];
  const decimals = match && match[2].includes(".") ? 1 : 0;

  const [shown, setShown] = useState(Number.isNaN(target) ? 0 : target);

  useEffect(() => {
    if (Number.isNaN(target) || still) return;
    if (!inView) {
      setShown(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(v),
    });
    return () => controls.stop();
  }, [inView, target, still]);

  if (Number.isNaN(target)) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}

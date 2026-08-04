"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card shell that tracks the pointer and paints a soft ember glow under it,
 * with a gradient hairline edge that brightens on hover.
 */
export default function Spotlight({
  children,
  className,
  size = 420,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  as?: "div" | "article";
}) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  const glow = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, rgba(255,92,56,0.10), transparent 70%)`;

  const track = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const reset = () => {
    x.set(-9999);
    y.set(-9999);
  };

  const Motion = Tag === "article" ? motion.article : motion.div;

  return (
    <Motion
      onMouseMove={track}
      onMouseLeave={reset}
      className={cn(
        "edge group/spot relative overflow-hidden rounded-xl border border-line bg-coal",
        className
      )}
    >
      <motion.span
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </Motion>
  );
}

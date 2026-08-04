"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Runs on mount instead of on scroll — for above-the-fold content. */
  immediate?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  immediate = false,
}: Props) {
  const still = useReducedMotion();

  const hidden = still
    ? { opacity: 0 }
    : { opacity: 0, y, filter: "blur(8px)" };
  const shown = still
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(immediate
        ? { animate: shown }
        : {
            whileInView: shown,
            viewport: { once: true, margin: "0px 0px -8% 0px" },
          })}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

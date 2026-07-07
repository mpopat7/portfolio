"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
};

// Staggered word-by-word rise on first scroll into view.
// Falls back to a single fade under prefers-reduced-motion.
export default function RevealText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Tag className={className}>{text}</Tag>
      </motion.div>
    );
  }

  return (
    <Tag className={cn("leading-tight", className)} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

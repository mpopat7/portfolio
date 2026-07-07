"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { hero } from "@/data/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex h-svh items-center justify-center overflow-hidden"
    >
      {/* drifting background glow */}
      <motion.div
        aria-hidden
        className="absolute left-[10%] top-[15%] h-[45vw] w-[45vw] rounded-full bg-ember/10 blur-[120px]"
        animate={reduce ? undefined : { x: [0, 90, -50, 0], y: [0, -70, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[10%] right-[5%] h-[35vw] w-[35vw] rounded-full bg-paper/[0.04] blur-[100px]"
        animate={reduce ? undefined : { x: [0, -80, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={reduce ? undefined : { opacity, scale, y }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ember"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.25rem,11vw,8.5rem)] font-semibold leading-[0.95] tracking-tight"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-smoke md:text-lg"
        >
          {hero.tagline}
        </motion.p>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          Scroll
        </span>
        <div className="h-10 w-px overflow-hidden bg-line">
          <motion.div
            className="h-1/2 w-full bg-ember"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { hero, site } from "@/data/content";
import Spotlight from "@/components/ui/Spotlight";

const EASE = [0.22, 1, 0.36, 1] as const;

// Word-by-word reveal in CSS rather than JS: the natural state is visible, so
// the headline can never get stranded at opacity 0 if the animation is skipped,
// and the reduced-motion rule in globals.css collapses it to an instant show.
function Headline() {
  const words = hero.headline.split(" ");
  const last = words.length - 1;

  return (
    <h1 className="max-w-3xl text-[clamp(2.75rem,6.5vw,5.5rem)] font-semibold leading-[1.04] tracking-tight">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.06em]">
          <span
            style={{ animationDelay: `${0.2 + i * 0.045}s` }}
            className={`inline-block animate-word-rise ${i === last ? "text-ember" : ""}`}
          >
            {word}
          </span>
          {i < last && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
}

function Terminal() {
  const pad = (label: string) =>
    `${label} ${".".repeat(Math.max(2, 22 - label.length))}`;

  return (
    <Spotlight className="w-full max-w-sm bg-coal/80 p-5 font-mono text-xs leading-relaxed text-smoke backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-ember/80" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-smoke/60">
          Session
        </span>
      </div>
      <p className="text-paper">$ {hero.terminal.command}</p>
      {hero.terminal.lines.map(([label, status], i) => (
        <motion.p
          key={label}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1 + i * 0.14, ease: EASE }}
          className="pl-4"
        >
          {pad(label)} <span className="text-paper">{status}</span>
        </motion.p>
      ))}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.45 }}
        className="pl-4"
      >
        {hero.terminal.partial}
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-ember" />
      </motion.p>
    </Spotlight>
  );
}

export default function Hero() {
  const still = useReducedMotion();

  // Driven by raw page scroll rather than element progress: the hero is the
  // first thing on the page, so pixels are unambiguous and need no measurement.
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.5,
  });

  const lift = useTransform(smooth, [0, 700], [0, -70]);
  const fade = useTransform(smooth, [0, 550], [1, 0]);
  const glowDrift = useTransform(smooth, [0, 700], [0, 150]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={still ? undefined : { y: glowDrift }}
        className="pointer-events-none absolute -right-[10%] top-[20%] h-[55vw] w-[55vw] rounded-full bg-ember/[0.07] blur-[130px]"
      />

      <motion.div
        style={still ? undefined : { y: lift, opacity: fade }}
        className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mb-8"
        >
          <span className="edge inline-flex items-center gap-2.5 rounded-full bg-coal/60 px-3.5 py-1.5 font-mono text-xs text-smoke backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            {hero.status}
          </span>
        </motion.div>

        <Headline />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="mt-10 flex items-center gap-7"
        >
          <Link
            href={hero.cta.href}
            className="group relative overflow-hidden rounded-full border border-ember/50 bg-ember/10 px-5 py-3 font-mono text-xs text-paper transition-colors duration-300 hover:bg-ember/20"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] skew-x-[-20deg] bg-paper/15 transition-transform duration-700 ease-out-expo group-hover:translate-x-[400%]"
            />
            <span className="relative inline-flex items-center gap-2">
              {hero.cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="group font-mono text-xs text-smoke transition-colors hover:text-paper"
          >
            Résumé
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          className="mt-14 pb-16"
        >
          <Terminal />
        </motion.div>
      </motion.div>
    </section>
  );
}

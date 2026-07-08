"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero, site } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function Headline() {
  const words = hero.headline.split(" ");
  const last = words.pop();
  return (
    <h1 className="max-w-3xl text-[clamp(2.75rem,6.5vw,5.5rem)] font-semibold leading-[1.04] tracking-tight">
      {words.join(" ")} <span className="text-ember">{last}</span>
    </h1>
  );
}

function Terminal() {
  const pad = (label: string) =>
    `${label} ${".".repeat(Math.max(2, 22 - label.length))}`;
  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-coal/80 p-5 font-mono text-xs leading-relaxed text-smoke">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-ember/80" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-smoke/60">
          Session
        </span>
      </div>
      <p className="text-paper">$ {hero.terminal.command}</p>
      {hero.terminal.lines.map(([label, status]) => (
        <p key={label} className="pl-4">
          {pad(label)} <span className="text-paper">{status}</span>
        </p>
      ))}
      <p className="pl-4">
        {hero.terminal.partial}
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-ember" />
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* static warm glow, right side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] top-[20%] h-[55vw] w-[55vw] rounded-full bg-ember/[0.06] blur-[130px]"
      />

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-2.5 font-mono text-xs text-smoke"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          {hero.status}
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }}>
          <Headline />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex items-center gap-7"
        >
          <Link
            href={hero.cta.href}
            className="rounded-md border border-ember/50 bg-ember/10 px-5 py-3 font-mono text-xs text-paper transition-colors hover:bg-ember/20"
          >
            {hero.cta.label} →
          </Link>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-smoke transition-colors hover:text-paper"
          >
            Résumé ↗
          </a>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.7 }} className="mt-14 pb-16">
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { experience } from "@/data/content";
import RevealText from "@/components/RevealText";

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The timeline's spine draws in, scrubbed to scroll position.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-32">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ember">
        Experience
      </p>
      <RevealText
        text="Where I've worked."
        className="text-4xl font-semibold tracking-tight md:text-6xl"
      />

      <div ref={listRef} className="relative mt-16">
        <div aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-line" />
        <motion.div
          aria-hidden
          className="absolute left-[5px] top-0 w-px origin-top bg-ember"
          style={{
            height: "100%",
            scaleY: reduce ? 1 : scrollYProgress,
          }}
        />

        <ol className="space-y-16">
          {experience.map((entry, i) => (
            <motion.li
              key={entry.org}
              initial={{ opacity: 0, x: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12"
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-ember bg-night"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-smoke">
                {entry.dates}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {entry.role}
              </h3>
              <p className="mt-1 text-smoke">{entry.org}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-smoke/80">
                {entry.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

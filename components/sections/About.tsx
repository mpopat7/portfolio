"use client";

import { motion } from "motion/react";
import { about } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>About</Eyebrow>
        <div className="grid gap-14 md:grid-cols-[300px,1fr] md:gap-20">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <Spotlight className="p-0" size={320}>
              <img
                src={about.photo}
                alt="Milen Popat"
                className="w-56 md:w-full"
                loading="lazy"
              />
            </Spotlight>
            <dl className="mt-6 border-t border-line">
              {about.facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-3 transition-colors duration-300 hover:border-ember/40"
                >
                  <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke/70">
                    {fact.label}
                  </dt>
                  <dd className="text-right font-mono text-xs text-paper/90 transition-colors duration-300 group-hover:text-ember">
                    {fact.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-[2.6rem]">
              {about.heading}
            </h2>
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mt-6 max-w-2xl leading-relaxed text-smoke first-of-type:mt-10"
              >
                {para.map((seg, j) =>
                  seg.accent ? (
                    <span key={j} className="text-ember">
                      {seg.text}
                    </span>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </p>
            ))}

            <div className="mt-12">
              <Eyebrow>Now</Eyebrow>
              <ul className="space-y-3">
                {about.now.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex max-w-2xl gap-4 text-sm leading-relaxed text-smoke/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-4 shrink-0 bg-ember/60 transition-all duration-300 group-hover:w-7 group-hover:bg-ember"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

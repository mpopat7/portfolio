"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>About</Eyebrow>
        <div className="grid gap-14 md:grid-cols-[300px,1fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={about.photo}
              alt="Milen Popat"
              className="w-56 rounded-xl border border-line md:w-full"
              loading="lazy"
            />
            <dl className="mt-6 border-t border-line">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke/70">
                    {fact.label}
                  </dt>
                  <dd className="text-right font-mono text-xs text-paper/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
                {about.now.map((item) => (
                  <li
                    key={item}
                    className="flex max-w-2xl gap-4 text-sm leading-relaxed text-smoke/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-4 shrink-0 bg-ember/60"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

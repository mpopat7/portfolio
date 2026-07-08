"use client";

import { motion } from "framer-motion";
import { work } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function Experience() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>{work.eyebrow}</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          {work.heading}
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-smoke">{work.sub}</p>

        <div className="mt-14">
          {work.entries.map((entry) => (
            <motion.article
              key={`${entry.role}-${entry.org}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5 }}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px,1fr] md:gap-10"
            >
              <div className="font-mono text-xs leading-relaxed text-smoke">
                <p className="flex items-center gap-2 text-paper">
                  {entry.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  )}
                  {entry.dates}
                </p>
                <p className="mt-1 uppercase tracking-wider text-smoke/70">
                  {entry.location}
                </p>
                <p className="uppercase tracking-wider text-smoke/70">
                  {entry.mode}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {entry.role}{" "}
                  <span className="font-normal text-smoke">· {entry.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-smoke">{entry.summary}</p>
                <ul className="mt-5 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex max-w-2xl gap-4 text-sm leading-relaxed text-smoke/80"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-4 shrink-0 bg-smoke/50"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

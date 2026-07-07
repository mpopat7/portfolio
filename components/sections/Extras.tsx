"use client";

import { motion } from "framer-motion";
import { extras } from "@/data/content";

export default function Extras() {
  return (
    <section id="extras" className="mx-auto max-w-4xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ember">
          Case Competitions
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {extras.heading}
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {extras.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-sm text-smoke">{item.note}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

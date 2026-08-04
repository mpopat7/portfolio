"use client";

import { motion } from "motion/react";
import type { ListSectionContent } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function ListSection({ id, eyebrow, heading, items }: ListSectionContent) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-10">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -6% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative flex flex-col gap-1 border-t border-line py-5 transition-colors duration-300 hover:border-ember/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 inset-y-0 -z-10 bg-gradient-to-r from-ember/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="shrink-0 font-medium transition-colors duration-300 group-hover:text-ember">
                {item.title}
              </span>
              <span className="text-sm text-smoke sm:max-w-xl sm:text-right">
                {item.note}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

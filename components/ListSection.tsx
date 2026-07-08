"use client";

import { motion } from "framer-motion";
import type { ListSectionContent } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function ListSection({ id, eyebrow, heading, items }: ListSectionContent) {
  return (
    <section id={id} className="border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {heading}
        </h2>
        <ul className="mt-10">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="shrink-0 font-medium">{item.title}</span>
              <span className="text-sm text-smoke sm:max-w-xl sm:text-right">
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

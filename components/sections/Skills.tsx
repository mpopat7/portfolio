"use client";

import { motion } from "framer-motion";
import { toolGroups, toolsIntro } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>{toolsIntro}</Eyebrow>

        <div className="mt-4 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke/70">
                <span aria-hidden className="h-px w-4 bg-smoke/40" />
                {group.title}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-coal px-2.5 py-1 font-mono text-[11px] text-paper/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

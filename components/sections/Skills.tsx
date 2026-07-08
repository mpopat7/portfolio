"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>Skills</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          The toolkit.
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="border-t border-line pt-5"
            >
              <h3 className="flex items-baseline gap-3 font-medium">
                <span className="font-mono text-[11px] text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-smoke">
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

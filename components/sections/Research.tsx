"use client";

import { motion } from "framer-motion";
import { research } from "@/data/content";
import RevealText from "@/components/RevealText";

export default function Research() {
  return (
    <section id="research" className="border-y border-line bg-coal/40">
      <div className="mx-auto max-w-4xl px-6 py-32">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ember">
          {research.eyebrow}
        </p>
        <RevealText
          text={research.role}
          className="text-3xl font-semibold tracking-tight md:text-5xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke"
        >
          {research.body}
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
          }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {research.focus.map((area) => (
            <motion.li
              key={area}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="rounded-full border border-line px-4 py-2 font-mono text-xs text-paper/80"
            >
              {area}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

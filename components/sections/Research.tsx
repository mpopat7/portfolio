"use client";

import { motion } from "motion/react";
import { researchFeature } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function Research() {
  return (
    <section id="research" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>Research</Eyebrow>
        <p className="max-w-md text-smoke">{researchFeature.sub}</p>

        <Reveal className="mt-10" y={28}>
          <Spotlight className="grid md:grid-cols-[2fr,3fr]" size={620}>
            <div className="flex flex-col justify-center gap-3 border-b border-line p-8 font-mono text-xs text-smoke md:border-b-0 md:border-r">
              {researchFeature.pipeline.map((step, i) => (
                <motion.p
                  key={step}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-ember">
                    {i < researchFeature.pipeline.length - 1 ? "├─" : "└─"}
                  </span>
                  {step}
                </motion.p>
              ))}
            </div>
            <div className="p-8">
              <p className="font-mono text-xs text-ember">{researchFeature.label}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                {researchFeature.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs text-smoke">
                {researchFeature.meta}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-smoke/90">
                {researchFeature.description}
              </p>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}

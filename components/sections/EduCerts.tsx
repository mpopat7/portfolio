"use client";

import { motion } from "motion/react";
import { certifications, education } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function EduCerts() {
  return (
    <section id="education" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <Spotlight className="p-7" size={380}>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {education.school}
            </h3>
            <p className="mt-2 max-w-md text-smoke">{education.degree}</p>
            <p className="mt-3 font-mono text-xs text-smoke/70">
              {education.meta}
            </p>
            <p className="mt-1 font-mono text-xs text-smoke/70">
              {education.dates}
            </p>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>Certifications</Eyebrow>
          <ul>
            {certifications.map((cert, i) => (
              <motion.li
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group flex flex-col gap-0.5 border-b border-line py-4 transition-colors duration-300 hover:border-ember/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-sm font-medium transition-colors duration-300 group-hover:text-ember">
                  {cert.name}
                </span>
                <span className="shrink-0 font-mono text-xs text-smoke">
                  {cert.issuer}
                </span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

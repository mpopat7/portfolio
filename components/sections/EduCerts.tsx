"use client";

import { motion } from "framer-motion";
import { certifications, education } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

export default function EduCerts() {
  return (
    <section id="education" className="border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-2"
      >
        <div>
          <Eyebrow>Education</Eyebrow>
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
        </div>

        <div>
          <Eyebrow>Certifications</Eyebrow>
          <ul>
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col gap-0.5 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-sm font-medium">{cert.name}</span>
                <span className="shrink-0 font-mono text-xs text-smoke">
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

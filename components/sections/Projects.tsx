"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

function ExtLink({ href, label }: { href: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs text-ember transition-opacity hover:opacity-70"
    >
      {label} ↗
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>Projects</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Things I&apos;ve shipped.
        </h2>

        <div className="mt-14">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5 }}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[160px,1fr] md:gap-10"
            >
              <div className="font-mono text-xs text-smoke">
                <p>{project.year}</p>
                <div className="mt-3 flex gap-4 md:flex-col md:gap-2">
                  <ExtLink href={project.github} label="GitHub" />
                  {project.demo && <ExtLink href={project.demo} label="Live" />}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-smoke">{project.tagline}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-smoke/80">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-xs text-smoke/70">
                  {project.tech.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

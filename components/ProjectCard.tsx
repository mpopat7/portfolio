"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";
import { cn } from "@/lib/utils";

export function ProjectLink({ href, label }: { href: string; label: string }) {
  if (!href) return null;
  if (href.startsWith("[")) {
    return (
      <span className="font-mono text-xs text-smoke/50" title="Placeholder — add the real link in data/content.ts">
        {href}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs uppercase tracking-widest text-ember transition-opacity hover:opacity-70"
    >
      {label} ↗
    </a>
  );
}

export function TechChips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-smoke"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

// Abstract visual panel used in place of screenshots until real media exists.
export function ProjectVisual({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const glowPositions = [
    "at 20% 15%",
    "at 80% 20%",
    "at 25% 85%",
    "at 75% 80%",
    "at 50% 10%",
  ];
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-coal p-8",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(90% 90% ${glowPositions[index % glowPositions.length]}, rgba(255, 92, 56, 0.14), transparent 65%)`,
      }}
    >
      <span className="font-mono text-sm text-smoke">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="mb-4 text-xl font-semibold leading-snug md:text-2xl">
          {project.name}
        </p>
        <TechChips tech={project.tech} />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[10rem] font-bold leading-none text-paper/[0.035]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

// Stacked card used on mobile and as the reduced-motion fallback.
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <ProjectVisual project={project} index={index} />
      <div className="mt-6">
        <p className="text-lg text-smoke">{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-smoke/80">
          {project.description}
        </p>
        <div className="mt-5 flex items-center gap-6">
          <ProjectLink href={project.github} label="GitHub" />
          {project.demo && <ProjectLink href={project.demo} label="Live" />}
        </div>
      </div>
    </motion.article>
  );
}

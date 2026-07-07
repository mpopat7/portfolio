"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { useScrollFX } from "@/hooks/useScrollFX";
import RevealText from "@/components/RevealText";
import ProjectCard, {
  ProjectLink,
  ProjectVisual,
  TechChips,
} from "@/components/ProjectCard";

function ProjectsHeader() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ember">
        Featured Projects
      </p>
      <RevealText
        text="Things I've shipped."
        className="text-4xl font-semibold tracking-tight md:text-6xl"
      />
    </div>
  );
}

// Desktop: classic split-scroll — the visual column is sticky while each
// project's copy scrolls past; the visual crossfades to track the active
// entry. Mobile / reduced motion: stacked ProjectCards.
export default function Projects() {
  const fx = useScrollFX();
  const [active, setActive] = useState(0);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!fx) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = articleRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    articleRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [fx]);

  if (!fx) {
    return (
      <section id="projects" className="py-32">
        <ProjectsHeader />
        <div className="mx-auto mt-16 max-w-6xl space-y-24 px-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32">
      <ProjectsHeader />
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-16 px-6">
        {/* text column — one full-viewport block per project */}
        <div>
          {projects.map((project, i) => (
            <article
              key={project.name}
              ref={(el) => {
                articleRefs.current[i] = el;
              }}
              className="flex min-h-screen flex-col justify-center"
            >
              <span className="font-mono text-sm text-ember">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-4 text-lg text-smoke">{project.tagline}</p>
              <p className="mt-4 leading-relaxed text-smoke/80">
                {project.description}
              </p>
              <div className="mt-6">
                <TechChips tech={project.tech} />
              </div>
              <div className="mt-6 flex items-center gap-6">
                <ProjectLink href={project.github} label="GitHub" />
                {project.demo && (
                  <ProjectLink href={project.demo} label="Live" />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* sticky visual column */}
        <div className="relative">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative w-full">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: i === 0 ? "relative" : "absolute" }}
                >
                  <ProjectVisual project={project} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

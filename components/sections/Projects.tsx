"use client";

import { motion } from "motion/react";
import {
  featuredProjects,
  moreProjects,
  projectsIntro,
  type FeaturedProject,
} from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";
import Counter from "@/components/ui/Counter";
import { cn } from "@/lib/utils";

function ExtLink({
  href,
  label,
  accent = false,
}: {
  href: string;
  label: string;
  accent?: boolean;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group/link font-mono text-xs transition-colors",
        accent ? "text-ember hover:opacity-70" : "text-smoke hover:text-paper"
      )}
    >
      {label}
      <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}

function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t, i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-smoke transition-colors duration-300 hover:border-ember/40 hover:text-paper"
        >
          {t}
        </motion.li>
      ))}
    </ul>
  );
}

// Browser-frame mockup. Shows the project screenshot when `image` is set,
// otherwise an abstract placeholder panel.
function BrowserCard({ project }: { project: FeaturedProject }) {
  return (
    <Spotlight className="shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out-expo hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-[10px] text-smoke/70">
          {project.url}
        </span>
      </div>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="aspect-[16/10] w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="relative flex aspect-[16/10] flex-col items-start justify-end overflow-hidden p-6">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(90% 100% at 75% 0%, rgba(255,92,56,0.16), transparent 60%)",
            }}
          />
          <p className="relative text-lg font-semibold">{project.name}</p>
          <p className="relative mt-1 font-mono text-xs text-smoke">
            {project.tagline}
          </p>
        </div>
      )}
    </Spotlight>
  );
}

function Featured({ project, index }: { project: FeaturedProject; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16">
      <Reveal className={cn(flip && "md:order-2")} y={28}>
        <BrowserCard project={project} />
      </Reveal>

      <Reveal className={cn(flip && "md:order-1")} delay={0.08}>
        <p className="flex items-center gap-3 font-mono text-xs text-smoke">
          <span>
            {String(index + 1).padStart(2, "0")}&ensp;{project.year}
          </span>
          <span aria-hidden className="h-px w-6 bg-line" />
          <span className="flex items-center gap-1.5 text-ember">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            {project.status}
          </span>
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1.5 font-mono text-xs text-smoke">{project.tagline}</p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-smoke/90">
          {project.description}
        </p>

        <TechChips items={project.tech} />

        {project.stats && (
          <div className="mt-7 flex gap-10">
            {project.stats.map((stat) => (
              <p key={stat.label}>
                <span className="text-2xl font-semibold text-paper">
                  <Counter value={stat.value} />
                </span>
                <span className="ml-2 font-mono text-xs text-smoke">
                  {stat.label}
                </span>
              </p>
            ))}
          </div>
        )}

        <div className="mt-7 flex items-center gap-6">
          <ExtLink href={project.github} label="Source" accent />
          {project.demo && <ExtLink href={project.demo} label="Live" />}
        </div>
      </Reveal>
    </article>
  );
}

function MoreWork() {
  return (
    <div className="mt-16 border-t border-line pt-16">
      <Eyebrow>More work</Eyebrow>
      <div className="mt-4 grid gap-8 md:grid-cols-3">
        {moreProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article>
              <Spotlight className="transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
                <div className="relative flex aspect-[16/9] items-end overflow-hidden p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(100% 110% at 25% 0%, rgba(255,92,56,0.13), transparent 60%)",
                    }}
                  />
                  <p className="relative font-mono text-xs text-smoke">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              </Spotlight>
              <h4 className="mt-5 font-medium">{project.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                {project.tagline}
              </p>
              {project.github && (
                <div className="mt-3">
                  <ExtLink href={project.github} label="Source" accent />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>Projects</Eyebrow>
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {projectsIntro.heading}
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-smoke">
            {projectsIntro.sub}
          </p>
        </Reveal>

        <div className="mt-10">
          {featuredProjects.map((project, i) => (
            <Featured key={project.name} project={project} index={i} />
          ))}
        </div>

        <MoreWork />
      </div>
    </section>
  );
}

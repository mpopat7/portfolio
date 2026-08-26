import {
  featuredProjects,
  moreProjects,
  researchFeature,
} from "./content";

/**
 * The world-list needs one flat, uniformly-shaped array. featuredProjects,
 * moreProjects and researchFeature are three different shapes in content.ts,
 * so they get normalised here rather than special-cased in the component.
 *
 * content.ts stays the only place copy is edited.
 */
export type ProjectEntry = {
  name: string;
  year: string;
  status: string;
  /** Drives the signal-bar colour and fill. */
  level: 4 | 3 | 2;
  blurb: string;
  tech: string[];
  github: string;
  demo?: string;
  /** Two-letter tile, the way a world shows its icon. */
  sigil: string;
  stats?: { value: string; label: string }[];
};

function sigil(name: string) {
  const words = name.split(/[\s-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/** "In progress" reads as a weaker signal than "Live"; mirror that in the bars. */
function levelFor(status: string): 4 | 3 | 2 {
  const s = status.toLowerCase();
  if (s.includes("live") || s.includes("shipped")) return 4;
  if (s.includes("progress")) return 2;
  return 3;
}

export const projectEntries: ProjectEntry[] = [
  ...featuredProjects.map((p) => ({
    name: p.name,
    year: p.year,
    status: p.status,
    level: levelFor(p.status),
    blurb: p.description,
    tech: p.tech,
    github: p.github,
    demo: p.demo,
    sigil: sigil(p.name),
    stats: p.stats,
  })),
  {
    name: researchFeature.title,
    year: "2026",
    status: "Research · in progress",
    level: 2 as const,
    blurb: researchFeature.description,
    tech: researchFeature.pipeline,
    github: "",
    sigil: "AL",
  },
  ...moreProjects.map((p) => ({
    name: p.name,
    year: "2026",
    status: p.github ? "Source available" : "Private",
    level: 3 as const,
    blurb: p.tagline,
    tech: p.tech,
    github: p.github,
    sigil: sigil(p.name),
  })),
];

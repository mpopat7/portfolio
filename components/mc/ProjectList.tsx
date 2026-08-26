"use client";

import { useMemo, useState } from "react";
import McButton from "./McButton";
import { projectEntries, type ProjectEntry } from "@/data/projects-index";

/**
 * Minecraft's world-selection screen, holding projects. Searching filters the
 * list; picking a row opens the detail pane the way "Edit World" would.
 */
export default function ProjectList() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ProjectEntry | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projectEntries;
    return projectEntries.filter((p) =>
      [p.name, p.blurb, p.status, ...p.tech]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  if (selected) {
    return <ProjectDetail project={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center px-3 pb-2 pt-3 sm:px-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects…"
        aria-label="Search projects"
        className="mc-input w-[540px] max-w-[92%] px-2 text-base sm:text-lg"
      />

      <div
        className="scrollbar-hidden mt-3 min-h-0 w-full max-w-[1040px] flex-1 overflow-y-auto p-1"
        tabIndex={0}
        aria-label="Project list, scrollable"
      >
        {results.length === 0 ? (
          <p className="mc-text py-10 text-center text-neutral-400">
            No projects match “{query}”.
          </p>
        ) : (
          results.map((p) => (
            <button
              key={p.name}
              onClick={() => setSelected(p)}
              className="flex w-full items-center gap-3 border-2 border-transparent px-3 py-3 text-left hover:border-white/30 hover:bg-white/5 focus-visible:border-white/60 focus-visible:outline-none sm:gap-4 sm:px-5 sm:py-4"
            >
              <Sigil text={p.sigil} />

              <div
                className="flex min-w-0 flex-1 flex-col gap-1"
                style={{ textShadow: "2px 2px 0 #3f3f3f" }}
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xl leading-tight sm:text-2xl">
                    {p.name}
                  </span>
                  <span className="text-xs text-neutral-500 sm:text-sm">
                    {p.year}
                  </span>
                </div>
                <div className="line-clamp-3 max-w-[760px] text-sm leading-relaxed text-neutral-200 sm:text-base">
                  {p.blurb}
                </div>
                <div className="mt-1 flex max-w-[800px] flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="mc-tag px-2 py-0.5 text-xs text-neutral-200 sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <SignalBars level={p.level} status={p.status} />
            </button>
          ))
        )}
      </div>
    </div>
  );
}

function Sigil({ text }: { text: string }) {
  return (
    <div
      className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden border-2 border-black text-2xl sm:h-20 sm:w-20 sm:text-3xl"
      style={{
        background:
          "repeating-linear-gradient(45deg, #464646 0 8px, #3a3a3a 8px 16px)",
        boxShadow: "inset 2px 2px 0 #5d5d5d, inset -2px -2px 0 #1a1a1a",
        textShadow: "2px 2px 0 #1a1a1a",
      }}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}

const LEVEL_COLOR: Record<number, string> = {
  4: "#55ff55",
  3: "#ffff55",
  2: "#ffaa00",
};

function SignalBars({ level, status }: { level: number; status: string }) {
  const color = LEVEL_COLOR[level] ?? "#a8a8a8";
  return (
    <div className="flex min-w-[58px] shrink-0 flex-col items-end gap-1.5 pr-1 sm:min-w-[86px]">
      <div className="flex h-5 items-end gap-[2px]" aria-hidden="true">
        {[6, 10, 14, 18].map((h, i) => (
          <span
            key={h}
            className="w-[3px] sm:w-1"
            style={{
              height: h,
              background: i < level ? color : "#3a3a3a",
              boxShadow: "1px 1px 0 #1a1a1a",
            }}
          />
        ))}
      </div>
      <span
        className="text-right text-xs sm:text-sm"
        style={{ color, textShadow: "1px 1px 0 #1a1a1a" }}
      >
        {status}
      </span>
    </div>
  );
}

function ProjectDetail({
  project,
  onBack,
}: {
  project: ProjectEntry;
  onBack: () => void;
}) {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center px-3 pb-3 pt-3 sm:px-8">
      <div
        className="scrollbar-hidden min-h-0 w-full max-w-[900px] flex-1 overflow-y-auto"
        tabIndex={0}
      >
        <div className="flex items-center gap-4">
          <Sigil text={project.sigil} />
          <div style={{ textShadow: "2px 2px 0 #3f3f3f" }}>
            <h2 className="text-2xl sm:text-3xl">{project.name}</h2>
            <p className="mt-1 text-sm text-neutral-400">
              {project.year} · {project.status}
            </p>
          </div>
        </div>

        <p
          className="mt-5 text-sm leading-relaxed text-neutral-200 sm:text-base"
          style={{ textShadow: "2px 2px 0 #252525" }}
        >
          {project.blurb}
        </p>

        {project.stats && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.stats.map((s) => (
              <div key={s.label} className="mc-inset px-4 py-3 text-center">
                <div className="text-2xl text-white mc-text">{s.value}</div>
                <div className="mt-1 text-xs text-neutral-300 mc-text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="mc-tag px-2 py-0.5 text-xs text-neutral-200 sm:text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.github && (
            <McButton href={project.github} small external>
              View Source
            </McButton>
          )}
          {project.demo && (
            <McButton href={project.demo} small external>
              Open Demo
            </McButton>
          )}
        </div>
      </div>

      <div className="mt-3 shrink-0">
        <McButton onClick={onBack} small className="w-[calc(90*var(--u))] min-w-[180px]">
          Back to list
        </McButton>
      </div>
    </div>
  );
}

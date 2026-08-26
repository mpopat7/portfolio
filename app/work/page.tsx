import Screen from "@/components/mc/Screen";
import { work, education, certifications } from "@/data/content";

export const metadata = { title: "Experience — Milen Popat" };

/**
 * The experience timeline: a date column beside the role, in the flat
 * scrolling list Minecraft uses for Statistics.
 */
export default function WorkPage() {
  return (
    <Screen title="Experience" maxWidth="1180px">
      <div
        className="scrollbar-hidden min-h-0 w-full flex-1 overflow-y-auto overscroll-contain px-3 py-2 sm:px-8"
        tabIndex={0}
        aria-label="Experience timeline, scrollable"
      >
        <div className="mx-auto w-full max-w-[980px]">
          {work.entries.map((entry) => (
            <article
              key={`${entry.org}-${entry.dates}`}
              className="grid grid-cols-1 gap-3 border-b-2 border-white/10 px-1 py-5 last:border-b-0 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:px-3"
            >
              <div
                className="text-sm leading-relaxed text-neutral-400 sm:pt-1"
                style={{ textShadow: "2px 2px 0 #252525" }}
              >
                <p className="whitespace-nowrap">{entry.dates}</p>
                <p className="mt-1 text-xs text-neutral-500">
                  {entry.location} · {entry.mode}
                </p>
                {entry.current && (
                  <p className="mt-2 inline-flex items-center gap-2 text-xs text-mc-green">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 bg-mc-green shadow-[1px_1px_0_#1a3f1a]"
                    />
                    Current
                  </p>
                )}
              </div>

              <div className="min-w-0" style={{ textShadow: "2px 2px 0 #252525" }}>
                <h2 className="text-lg leading-snug text-white sm:text-xl">
                  {entry.role}
                  <span className="text-neutral-400"> — {entry.org}</span>
                </h2>
                <p className="mt-1 text-sm text-neutral-400">{entry.summary}</p>
                <ul className="mt-2.5 flex flex-col gap-1.5 text-sm leading-relaxed text-neutral-200 sm:text-[15px]">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-2 w-2 flex-shrink-0 bg-mc-green shadow-[1px_1px_0_#1a3f1a]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="grid grid-cols-1 gap-3 border-t-2 border-white/10 px-1 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:px-3">
            <div
              className="text-sm leading-relaxed text-neutral-400 sm:pt-1"
              style={{ textShadow: "2px 2px 0 #252525" }}
            >
              <p className="whitespace-nowrap">{education.dates}</p>
            </div>
            <div style={{ textShadow: "2px 2px 0 #252525" }}>
              <h2 className="text-lg leading-snug text-white sm:text-xl">
                {education.degree}
                <span className="text-neutral-400"> — {education.school}</span>
              </h2>
              <p className="mt-1 text-sm text-neutral-400">{education.meta}</p>
              <ul className="mt-2.5 flex flex-col gap-1.5 text-sm text-neutral-200">
                {certifications.map((c) => (
                  <li key={c.name} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-2 w-2 flex-shrink-0 bg-mc-aqua shadow-[1px_1px_0_#1a3f3f]"
                    />
                    <span>
                      {c.name}
                      <span className="text-neutral-400"> · {c.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </Screen>
  );
}

import { existsSync } from "node:fs";
import { join } from "node:path";
import Screen from "@/components/mc/Screen";
import Avatar from "@/components/mc/Avatar";
import McButton from "@/components/mc/McButton";
import { about, site, caseComps, leadership, contact } from "@/data/content";

export const metadata = { title: "About Me — Milen Popat" };

// public/headshot.jpg is gitignored (personal asset, uploaded at deploy time),
// so a clone or CI build has no file to serve. Resolve that here, at build
// time, rather than letting the browser request a 404 and swap after hydration.
const hasPhoto = existsSync(join(process.cwd(), "public", about.photo));

/**
 * The player-profile screen: portrait and stat rows down the left, the written
 * bio and inventory-style lists on the right.
 */
export default function AboutPage() {
  return (
    <Screen title="About Me" maxWidth="1180px">
      <div
        className="scrollbar-hidden min-h-0 w-full flex-1 overflow-y-auto overscroll-contain p-4"
        tabIndex={0}
        aria-label="About, scrollable"
      >
        <div className="grid w-full gap-3.5 min-[900px]:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
          {/* Left column: portrait, name plate, fact rows. */}
          <aside className="flex min-w-0 flex-col gap-3">
            <Avatar src={about.photo} name={site.name} available={hasPhoto} />

            <div className="mc-plate px-3 py-2.5">
              <p
                className="m-0 font-bold text-white"
                style={{
                  fontSize: "calc(9 * var(--u))",
                  textShadow: "2px 2px 0 #28251d",
                }}
              >
                {site.name}
              </p>
            </div>

            <div className="grid gap-1.5">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-2.5 border-2 border-[#29261e] bg-[rgba(20,20,16,0.55)] px-2.5 py-[7px]"
                  style={{ boxShadow: "inset 2px 2px 0 rgba(105,97,76,0.5)" }}
                >
                  <span
                    className="text-xs text-[#a9a185]"
                    style={{ textShadow: "2px 2px 0 #252525" }}
                  >
                    {f.label}
                  </span>
                  <span
                    className="text-right text-[13px] text-white"
                    style={{ textShadow: "2px 2px 0 #252525" }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <McButton href={site.resume} small className="w-full">
                Resume
              </McButton>
              <McButton
                href={`mailto:${site.email}`}
                small
                external
                className="w-full"
              >
                {site.email}
              </McButton>
              <McButton
                href={`mailto:${site.emailPersonal}`}
                small
                external
                className="w-full"
              >
                {site.emailPersonal}
              </McButton>
            </div>
          </aside>

          {/* Right column: bio, current work, lists. */}
          <div className="flex min-w-0 flex-col gap-3.5">
            <section
              className="mc-inset p-4"
              aria-label="Biography"
              style={{ textShadow: "2px 2px 0 #252525" }}
            >
              {about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="m-0 mb-2.5 text-sm leading-relaxed text-neutral-200 last:mb-0 sm:text-[15px]"
                >
                  {para.map((seg, j) => (
                    <span
                      key={j}
                      className={seg.accent ? "text-mc-gold" : undefined}
                    >
                      {seg.text}
                    </span>
                  ))}
                </p>
              ))}
            </section>

            <SlotList title="Currently" items={about.now} accent="#55ff55" />
            <SlotList
              title={caseComps.eyebrow}
              items={caseComps.items.map((i) => `${i.title} — ${i.note}`)}
              accent="#ffff55"
            />
            <SlotList
              title={leadership.eyebrow}
              items={leadership.items.map((i) => `${i.title} — ${i.note}`)}
              accent="#55ffff"
            />

            <section
              className="mc-inset p-4"
              style={{ textShadow: "2px 2px 0 #252525" }}
            >
              <h2 className="m-0 mb-1 text-lg text-white">{contact.heading}</h2>
              <p className="m-0 text-sm text-neutral-300">{contact.sub}</p>
            </section>
          </div>
        </div>
      </div>
    </Screen>
  );
}

/** A titled block of inventory-slot rows. */
function SlotList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <section className="mc-inset p-4" aria-label={title}>
      <h2
        className="m-0 mb-2.5 text-base text-white"
        style={{ textShadow: "2px 2px 0 #252525" }}
      >
        {title}
      </h2>
      <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 border-2 border-[#29261e] bg-[rgba(20,20,16,0.55)] px-2.5 py-2"
            style={{ boxShadow: "inset 2px 2px 0 rgba(105,97,76,0.5)" }}
          >
            <span
              aria-hidden="true"
              className="mt-[7px] h-2 w-2 flex-shrink-0"
              style={{ background: accent, boxShadow: "1px 1px 0 #1a1a1a" }}
            />
            <span
              className="text-sm leading-relaxed text-neutral-200"
              style={{ textShadow: "2px 2px 0 #252525" }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

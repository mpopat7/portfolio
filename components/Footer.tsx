"use client";

import { footer, nav, site } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm text-paper">
              milen<span className="text-smoke">.</span>popat
            </p>
            <p className="mt-2 font-mono text-xs text-smoke">{footer.role}</p>
          </div>

          <ul className="flex gap-7">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className="font-mono text-xs text-smoke transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-7">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-smoke transition-colors hover:text-paper"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-smoke transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-xs text-smoke transition-colors hover:text-paper"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-smoke/60">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[11px] text-smoke/60">{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}

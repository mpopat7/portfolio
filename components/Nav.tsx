"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-night/80 backdrop-blur-md" : ""
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className="font-mono text-sm text-paper"
          aria-label="Back to top"
        >
          milen<span className="text-smoke">.</span>popat
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
                className={cn(
                  "font-mono text-xs transition-colors duration-200",
                  active === item.id
                    ? "text-paper underline decoration-ember underline-offset-8"
                    : "text-smoke hover:text-paper"
                )}
              >
                <span className="mr-1.5 text-smoke/60">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs text-smoke transition-colors hover:text-paper sm:block"
          >
            Résumé
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-line bg-coal px-4 py-2 font-mono text-xs text-paper transition-colors hover:border-ember/60"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

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
      // A thin band around the viewport's vertical center decides the
      // active section, so tall pinned sections stay highlighted throughout.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-night/75 backdrop-blur-md" : ""
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className="font-mono text-sm tracking-widest text-paper"
          aria-label="Back to top"
        >
          MP<span className="text-ember">.</span>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
                className={cn(
                  "text-sm transition-colors duration-200",
                  active === item.id
                    ? "text-ember"
                    : "text-smoke hover:text-paper"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-ember md:hidden"
        >
          Email
        </a>
      </nav>
    </header>
  );
}

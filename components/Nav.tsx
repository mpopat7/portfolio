"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  useEffect(() => setScrolled(window.scrollY > 40), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          // py-4 is the pre-hydration fallback; motion drives it after mount.
          "mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-4 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-line bg-night/70 backdrop-blur-xl"
            : "border-transparent"
        )}
      >
        <Link
          href="/"
          className="group font-mono text-sm text-paper transition-opacity hover:opacity-80"
        >
          milen
          <span className="inline-block text-ember transition-transform duration-300 group-hover:rotate-90">
            .
          </span>
          popat
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative block rounded-full px-3 py-1.5 font-mono text-xs transition-colors duration-200 sm:px-4",
                    active ? "text-paper" : "text-smoke hover:text-paper"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full border border-ember/30 bg-ember/[0.09]"
                    />
                  )}
                  <span className="mr-1.5 hidden text-smoke/60 sm:inline">
                    {item.num}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs text-smoke transition-colors hover:text-paper md:block"
          >
            Résumé
          </a>
          <a
            href={`mailto:${site.email}`}
            className="group relative hidden overflow-hidden rounded-full border border-line bg-coal px-4 py-2 font-mono text-xs text-paper transition-colors hover:border-ember/60 sm:block"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] skew-x-[-20deg] bg-paper/10 transition-transform duration-700 ease-out-expo group-hover:translate-x-[400%]"
            />
            Get in touch
          </a>
        </div>
      </motion.nav>
    </header>
  );
}

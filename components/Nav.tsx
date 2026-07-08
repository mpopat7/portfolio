"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-night/80 backdrop-blur-md" : ""
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm text-paper">
          milen<span className="text-smoke">.</span>popat
        </Link>

        <ul className="flex items-center gap-5 sm:gap-8">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-mono text-xs transition-colors duration-200",
                    active
                      ? "text-paper underline decoration-ember underline-offset-8"
                      : "text-smoke hover:text-paper"
                  )}
                >
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
            className="hidden rounded-md border border-line bg-coal px-4 py-2 font-mono text-xs text-paper transition-colors hover:border-ember/60 sm:block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

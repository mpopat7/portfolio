"use client";

import { useEffect, useRef } from "react";
import { about } from "@/data/content";
import { gsap } from "@/lib/gsap";
import RevealText from "@/components/RevealText";

// Apple spec-page style body copy: words sit dimmed and brighten to full
// contrast as the scroll position sweeps past them (scrubbed, not one-shot).
export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.querySelectorAll("[data-word]"),
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-32 md:py-48">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ember">
        About
      </p>
      <RevealText
        text={about.heading}
        className="text-5xl font-semibold tracking-tight md:text-7xl"
      />
      <div className="mt-12 grid gap-10 md:grid-cols-[260px,1fr] md:items-start">
        <img
          src={about.photo}
          alt="Milen Popat"
          className="w-52 rounded-3xl border border-line md:w-full"
          loading="lazy"
        />
        <div>
          <div
            ref={ref}
            className="text-2xl font-medium leading-snug md:text-3xl md:leading-snug"
          >
            {about.body.split(" ").map((word, i) => (
              <span key={i} data-word className="inline">
                {word}{" "}
              </span>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-smoke"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

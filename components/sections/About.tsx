"use client";

import { useEffect, useRef } from "react";
import { about } from "@/data/content";
import { gsap } from "@/lib/gsap";
import Eyebrow from "@/components/Eyebrow";

// Body words sit dimmed and brighten as the scroll sweeps past (scrubbed).
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
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>About</Eyebrow>
        <div className="grid gap-12 md:grid-cols-[240px,1fr] md:items-start">
          <img
            src={about.photo}
            alt="Milen Popat"
            className="w-48 rounded-xl border border-line md:w-full"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {about.heading}
            </h2>
            <div
              ref={ref}
              className="mt-8 max-w-3xl text-xl font-medium leading-snug md:text-2xl md:leading-snug"
            >
              {about.body.split(" ").map((word, i) => (
                <span key={i} data-word className="inline">
                  {word}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

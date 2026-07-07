"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skillGroups, type SkillGroup } from "@/data/content";
import { gsap } from "@/lib/gsap";
import { useScrollFX } from "@/hooks/useScrollFX";
import PinnedSection from "@/components/PinnedSection";

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <div data-parallax className="w-[62vw] shrink-0 md:w-[270px]">
      <div className="rounded-2xl border border-line bg-coal p-6">
        <span className="font-mono text-xs text-ember">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          {group.title}
        </h3>
        <ul className="mt-4 space-y-1.5">
          {group.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-smoke">
              <span className="h-1 w-1 shrink-0 rounded-full bg-ember" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillsHeader() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ember">
        Technical Skills
      </p>
      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
        The toolkit.
      </h2>
    </div>
  );
}

// Desktop: section pins while the card row scrubs horizontally, each card
// drifting vertically at its own rate for depth. Mobile / reduced motion:
// a plain staggered grid.
export default function Skills() {
  const fx = useScrollFX();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fx) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrub = {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      };

      gsap.to(track, {
        x: () => Math.min(0, -(track.scrollWidth - window.innerWidth + 48)),
        ease: "none",
        scrollTrigger: { ...scrub, invalidateOnRefresh: true },
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]", track).forEach((el, i) => {
        const drift = i % 2 === 0 ? -20 : 20;
        gsap.fromTo(
          el,
          { y: -drift },
          { y: drift, ease: "none", scrollTrigger: { ...scrub, scrub: true } }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [fx]);

  if (!fx) {
    return (
      <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
        <SkillsHeader />
        <div className="mt-12 grid gap-6 px-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <SkillCard group={group} index={i} />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <PinnedSection id="skills" ref={sectionRef} height="240vh">
      <div className="flex h-full flex-col justify-center gap-10">
        <SkillsHeader />
        <div ref={trackRef} className="flex items-start gap-5 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </PinnedSection>
  );
}

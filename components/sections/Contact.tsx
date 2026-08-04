"use client";

import { contact, site } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[30%] left-1/2 h-[45vw] w-[70vw] -translate-x-1/2 rounded-full bg-ember/[0.06] blur-[140px]"
      />
      <Reveal className="mx-auto max-w-6xl px-6 py-28">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          {contact.heading}
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-smoke">{contact.sub}</p>

        <a
          href={`mailto:${site.email}`}
          className="group relative mt-10 inline-block text-xl font-medium text-paper transition-colors duration-300 hover:text-ember md:text-2xl"
        >
          {site.email}
          <span
            aria-hidden
            className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-100 bg-ember transition-transform duration-500 ease-out-expo group-hover:origin-right group-hover:scale-x-0"
          />
          <span
            aria-hidden
            className="absolute -bottom-2 left-0 h-0.5 w-full origin-right scale-x-0 bg-ember transition-transform delay-[250ms] duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100"
          />
        </a>
      </Reveal>
    </section>
  );
}

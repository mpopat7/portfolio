"use client";

import { motion } from "framer-motion";
import { contact, site } from "@/data/content";
import RevealText from "@/components/RevealText";

function ContactLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("[")) {
    return (
      <span className="font-mono text-xs text-smoke/50" title="Placeholder — add the real link in data/content.ts">
        {href}
      </span>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="font-mono text-sm uppercase tracking-widest text-smoke transition-colors hover:text-ember"
    >
      {label}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-svh flex-col items-center justify-center border-t border-line px-6 text-center"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ember">
        Contact
      </p>
      <RevealText
        text={contact.heading}
        className="text-5xl font-semibold tracking-tight md:text-8xl"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 max-w-md text-smoke"
      >
        {contact.sub}
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.55 }}
        href={`mailto:${site.email}`}
        className="mt-12 text-xl font-medium text-paper underline decoration-ember decoration-2 underline-offset-8 transition-colors hover:text-ember md:text-3xl"
      >
        {site.email}
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-14 flex items-center gap-8"
      >
        <ContactLink href={site.github} label="GitHub" />
        <ContactLink href={site.linkedin} label="LinkedIn" />
        <ContactLink href={site.resume} label="Resume" />
      </motion.div>

      <p className="absolute bottom-6 font-mono text-[11px] text-smoke/50">
        © {new Date().getFullYear()} {site.name} · Built with Next.js
      </p>
    </section>
  );
}

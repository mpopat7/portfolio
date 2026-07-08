"use client";

import { motion } from "framer-motion";
import { contact, site } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="font-mono text-xs text-smoke transition-colors hover:text-ember"
    >
      {label} ↗
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <Eyebrow>Contact</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          {contact.heading}
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-smoke">{contact.sub}</p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block text-xl font-medium text-paper underline decoration-ember decoration-2 underline-offset-8 transition-colors hover:text-ember md:text-2xl"
        >
          {site.email}
        </a>

        <div className="mt-12 flex items-center gap-8">
          <FooterLink href={site.github} label="GitHub" />
          <FooterLink href={site.linkedin} label="LinkedIn" />
          <FooterLink href={site.resume} label="Résumé" />
        </div>

        <p className="mt-20 border-t border-line pt-6 font-mono text-[11px] text-smoke/60">
          © {new Date().getFullYear()} {site.name} · Designed and built from
          scratch with Next.js
        </p>
      </motion.div>
    </section>
  );
}

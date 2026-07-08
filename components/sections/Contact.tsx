"use client";

import { motion } from "framer-motion";
import { contact, site } from "@/data/content";
import Eyebrow from "@/components/Eyebrow";

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
      </motion.div>
    </section>
  );
}

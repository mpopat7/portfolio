import type { Metadata } from "next";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = { title: "About · Milen Popat" };

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}

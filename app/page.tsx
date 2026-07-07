import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

// Below-the-fold sections are code-split so the initial bundle stays lean.
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Research = dynamic(() => import("@/components/sections/Research"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Extras = dynamic(() => import("@/components/sections/Extras"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Extras />
      <Contact />
    </main>
  );
}

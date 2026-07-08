import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

// Below-the-fold sections are code-split so the initial bundle stays lean.
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const EduCerts = dynamic(() => import("@/components/sections/EduCerts"));
const Leadership = dynamic(() => import("@/components/sections/Leadership"));
const Extras = dynamic(() => import("@/components/sections/Extras"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <EduCerts />
      <Leadership />
      <Extras />
      <Contact />
    </main>
  );
}

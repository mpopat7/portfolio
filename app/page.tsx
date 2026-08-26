import Logo from "@/components/mc/Logo";
import Splash from "@/components/mc/Splash";
import McButton from "@/components/mc/McButton";
import { GithubIcon, LinkedinIcon } from "@/components/mc/SocialIcons";
import { site } from "@/data/content";

/** The title screen. Everything else on the site is reachable from here. */
export default function Home() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden">
      <h1 className="sr-only">{site.name} — Portfolio</h1>

      <div className="flex w-full flex-col items-center pt-[6vh]">
        <Logo name={site.name} />
        <Splash />
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-[calc(200*var(--u))] max-w-[92vw] -translate-x-1/2 -translate-y-[42%] flex-col items-center gap-[calc(3*var(--u))]">
        <McButton href="/work" className="w-full">
          Experience
        </McButton>
        <McButton href="/projects" className="w-full">
          Projects
        </McButton>
        <McButton href="/about" className="w-full">
          About Me
        </McButton>

        <div className="mt-[calc(8*var(--u))] grid w-full grid-cols-[calc(20*var(--u))_minmax(0,1fr)_minmax(0,1fr)_calc(20*var(--u))] gap-[calc(2*var(--u))]">
          <McButton href={site.github} icon ariaLabel="GitHub" external>
            <GithubIcon />
          </McButton>
          <McButton href="/skills">Skills</McButton>
          <McButton href={site.resume}>Resume</McButton>
          <McButton href={site.linkedin} icon ariaLabel="LinkedIn" external>
            <LinkedinIcon />
          </McButton>
        </div>
      </div>

      <div
        className="mc-text pointer-events-none fixed bottom-[calc(3*var(--u))] left-[calc(50*var(--u))] hidden font-mc text-white sm:block"
        style={{ fontSize: "calc(6 * var(--u))" }}
      >
        Portfolio v2.0
      </div>

      <div
        className="mc-text pointer-events-none fixed bottom-[calc(23*var(--u))] right-[calc(3*var(--u))] max-w-[92vw] text-right font-mc leading-[1.15] text-white sm:bottom-[calc(3*var(--u))] sm:max-w-[780px]"
        style={{ fontSize: "calc(6 * var(--u))" }}
      >
        <span className="block">
          © {new Date().getFullYear()} {site.name}. Not an official Minecraft
          product.
        </span>
        <span className="block">
          Not approved by or associated with Mojang or Microsoft.
        </span>
      </div>
    </main>
  );
}

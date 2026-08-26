"use client";

import { useState } from "react";
import PixelIcon, { type IconName } from "./PixelIcon";
import { toolGroups } from "@/data/content";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** One tool per tool group, in content.ts order. */
const TOOL_ICONS: IconName[] = ["sword", "pickaxe", "axe", "shovel"];

const PARTICLES = [
  { size: 12, left: -46, color: "#b98cff", dx: "-14px", dur: "3.4s", delay: "0s" },
  { size: 9, left: 30, color: "#d8b6ff", dx: "12px", dur: "4.1s", delay: "0.7s" },
  { size: 7, left: -8, color: "#ffffff", dx: "6px", dur: "2.9s", delay: "1.4s" },
  { size: 10, left: 58, color: "#9d6bff", dx: "-10px", dur: "3.8s", delay: "2.1s" },
  { size: 8, left: -66, color: "#c9a3ff", dx: "16px", dur: "4.6s", delay: "2.8s" },
];

/**
 * The enchanting table, holding the four tool groups from content.ts. Picking
 * a tool on the left lists that group's skills on the right as "enchantments".
 */
export default function EnchantTable() {
  const [active, setActive] = useState(0);
  const group = toolGroups[active];

  return (
    <div className="flex w-full justify-center">
      <div className="mc-window flex w-full max-w-[1180px] flex-col gap-3.5 p-4">
        <div className="grid gap-[18px] min-[900px]:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          {/* Left: the book, particles, and the tool rack. */}
          <div className="mc-raised flex flex-col items-center justify-start gap-3 p-3">
            <h2
              className="m-0 font-bold text-[#3b3b3b]"
              style={{ fontSize: "calc(9 * var(--u))" }}
            >
              Enchant
            </h2>

            <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden">
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="mc-particle absolute bottom-1 left-1/2"
                  style={
                    {
                      width: p.size,
                      height: p.size,
                      marginLeft: p.left,
                      background: p.color,
                      boxShadow: `0 0 6px ${p.color}e6`,
                      "--dx": p.dx,
                      "--particle-duration": p.dur,
                      "--particle-delay": p.delay,
                    } as React.CSSProperties
                  }
                />
              ))}
              <PixelIcon name="book" size={128} />
            </div>

            <div
              className="grid w-full grid-cols-4 gap-2"
              role="tablist"
              aria-label="Skill groups"
            >
              {toolGroups.map((g, i) => (
                <button
                  key={g.title}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="enchantment-list"
                  title={g.title}
                  onClick={() => setActive(i)}
                  className="mc-inset flex aspect-square items-center justify-center p-1 transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  style={
                    i === active
                      ? { boxShadow: "inset 2px 2px 0 #373737, inset -2px -2px 0 #ffffff, 0 0 0 2px #ffff55" }
                      : undefined
                  }
                >
                  <PixelIcon name={TOOL_ICONS[i] ?? "sword"} size={44} />
                  <span className="sr-only">{g.title}</span>
                </button>
              ))}
            </div>

            <p className="m-0 text-center text-xs leading-relaxed text-[#4a4a4a]">
              Pick a tool to read its enchantments.
            </p>
          </div>

          {/* Right: the selected group's skills as enchantment rows. */}
          <div
            id="enchantment-list"
            role="tabpanel"
            aria-label={group.title}
            className="mc-inset flex flex-col gap-2 p-3"
          >
            <div className="flex items-baseline justify-between gap-3 px-1">
              <h3
                className="m-0 font-bold text-white mc-text"
                style={{ fontSize: "calc(9 * var(--u))" }}
              >
                {group.title}
              </h3>
              <span className="text-xs text-neutral-300 mc-text-sm">
                {group.items.length} enchantments
              </span>
            </div>

            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between gap-3 border-2 border-[#29261e] bg-[rgba(20,20,16,0.55)] px-2.5 py-[7px]"
                  style={{ boxShadow: "inset 2px 2px 0 rgba(105,97,76,0.5)" }}
                >
                  <span
                    className="text-sm text-white sm:text-[15px]"
                    style={{ textShadow: "2px 2px 0 #252525" }}
                  >
                    {item}
                  </span>
                  <span
                    className="shrink-0 text-xs text-mc-purple"
                    style={{ textShadow: "1px 1px 0 #1a1a1a" }}
                    aria-hidden="true"
                  >
                    {ROMAN[i % ROMAN.length]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

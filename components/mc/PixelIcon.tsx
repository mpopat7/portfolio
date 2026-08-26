/**
 * Pixel-art item icons drawn from a character grid into an SVG of 1x1 rects.
 * Hand-authored here so the site ships no extracted game art.
 *
 * Legend: '.' transparent, and each other char is a palette key.
 */
const PALETTE: Record<string, string> = {
  d: "#4aedd9", // diamond
  D: "#2ec4b6", // diamond shade
  s: "#a06540", // stick
  S: "#6b3f26", // stick shade
  k: "#1a1a1a", // outline
  w: "#ffffff",
  g: "#c6c6c6", // iron / page
  p: "#b98cff", // enchant purple
};

const SWORD = [
  "..........dd....",
  ".........dDd....",
  "........dDd.....",
  ".......dDd......",
  "......dDd.......",
  ".....dDd........",
  "....dDd.........",
  "...dDd..........",
  "..gDd...........",
  ".gsg............",
  "gsSg............",
  ".sS.............",
  "..S.............",
  "................",
  "................",
  "................",
];

const PICKAXE = [
  "....dddddd......",
  "...dDdddDdd.....",
  "...dD....Dd.....",
  "....d.ss..d.....",
  "......sS........",
  ".....sS.........",
  ".....sS.........",
  "....sS..........",
  "....sS..........",
  "...sS...........",
  "...sS...........",
  "..sS............",
  "..sS............",
  "..S.............",
  "................",
  "................",
];

const AXE = [
  "....dddd........",
  "...dDddDd.......",
  "...dD...Dd......",
  "...dD..sSd......",
  "...dD..sS.......",
  "....dd.sS.......",
  ".......sS.......",
  "......sS........",
  "......sS........",
  ".....sS.........",
  ".....sS.........",
  "....sS..........",
  "....S...........",
  "................",
  "................",
  "................",
];

const SHOVEL = [
  ".....dd.........",
  "....dDDd........",
  "....dDDd........",
  "....dDDd........",
  ".....ss.........",
  ".....sS.........",
  "....sS..........",
  "....sS..........",
  "...sS...........",
  "...sS...........",
  "..sS............",
  "..sS............",
  ".sS.............",
  ".S..............",
  "................",
  "................",
];

const BOOK = [
  "................",
  "................",
  "..kkkkk..kkkkk..",
  ".kwwwwwkkwwwwwk.",
  ".kwggwwkkwwggwk.",
  ".kwwwwwkkwwwwwk.",
  ".kwggggkkggggwk.",
  ".kwwwwwkkwwwwwk.",
  ".kwggwwkkwwggwk.",
  ".kwwwwwkkwwwwwk.",
  ".kwggggkkggggwk.",
  ".kkkkkkkkkkkkkk.",
  "................",
  "................",
  "................",
  "................",
];

export const ICONS = {
  sword: SWORD,
  pickaxe: PICKAXE,
  axe: AXE,
  shovel: SHOVEL,
  book: BOOK,
} as const;

export type IconName = keyof typeof ICONS;

export default function PixelIcon({
  name,
  size = 64,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const grid = ICONS[name];
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {grid.flatMap((row, y) =>
        row.split("").map((ch, x) =>
          ch === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={PALETTE[ch] ?? "#ff00ff"}
            />
          ),
        ),
      )}
    </svg>
  );
}

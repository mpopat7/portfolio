import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mc: ["var(--font-mc)", "ui-monospace", "monospace"],
      },
      colors: {
        mc: {
          gold: "#ffff55",
          green: "#55ff55",
          aqua: "#55ffff",
          purple: "#b98cff",
          red: "#ff5555",
          panel: "#c6c6c6",
          slot: "#8b8b8b",
          ink: "#ffffff",
          dim: "#a8a8a8",
        },
      },
    },
  },
  plugins: [],
};

export default config;

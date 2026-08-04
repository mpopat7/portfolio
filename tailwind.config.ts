import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#060505",
        coal: "#0d0c0b",
        paper: "#f4f1ea",
        smoke: "#9c968c",
        ember: "#ff5c38",
        line: "#211e1b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -6%, 0) scale(1.12)" },
        },
        "word-rise": {
          from: { opacity: "0", transform: "translateY(0.9em)", filter: "blur(10px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 34s ease-in-out infinite reverse",
        "word-rise": "word-rise 0.85s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;

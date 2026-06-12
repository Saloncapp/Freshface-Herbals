import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0d1f0f",
        deep: "#070f08",
        canopy: "#1a3320",
        moss: "#2a4a2e",
        sage: "#4a7a50",
        gold: "#c9a84c",
        goldLight: "#e8c97a",
        cream: "#f9f4e8",
        ivory: "#fdf8f0",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        ripple: "ripple 4s ease-out infinite",
        splash: "splash 3s ease-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.5" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        splash: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.8" },
          "50%": { transform: "translateY(-30px) scale(0.8)", opacity: "0.4" },
          "100%": { transform: "translateY(-60px) scale(0.3)", opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-15px) translateX(10px)" },
          "66%": { transform: "translateY(8px) translateX(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

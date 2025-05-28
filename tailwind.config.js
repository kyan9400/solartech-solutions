// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter", // For consistent font
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // Your SolarTech Brand Blues
        "brand-blue": "#0052CC", // Used for link hover text & underline in light mode
        "brand-blue-hover": "#0041A3",
        "brand-blue-light": "#E6F0FF",

        // Dark Gradient for Hero
        "brand-gradient-dark-from": "#192A56",
        "brand-gradient-dark-to": "#2F3640",

        // Text Colors
        "brand-text": "#334155", // Base color for header links in light mode
        "brand-text-light": "#cbd5e1",
        "brand-text-extralight": "#e2e8f0",

        // Accent Colors
        "brand-accent-glow": "#34D399", // Used for link hover text & underline in dark mode
        "brand-accent-hover": "#10B981",
      },
      boxShadow: {
        "glow-sm": "0 0 8px 0px rgba(52, 211, 153, 0.4)",
        "glow-md": "0 0 15px 2px rgba(52, 211, 153, 0.6)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0_0_15px_2px_rgba(52,211,153,0.6)" },
          "50%": { boxShadow: "0_0_25px_10px_rgba(52,211,153,0.7)" },
        },
        "flowing-glow": {
          "0%, 100%": { boxShadow: "0_0_8px_0px_rgba(52,211,153,0.3)" },
          "50%": { boxShadow: "0_0_12px_3px_rgba(52,211,153,0.5)" },
        },
        "snake-border-anim": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "16px 0px" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s infinite ease-in-out",
        "flowing-glow": "flowing-glow 3s infinite ease-in-out",
        "animate-snake-border": "snake-border-anim 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};

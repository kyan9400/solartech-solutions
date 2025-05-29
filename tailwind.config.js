// tailwind.config.js (MINIMAL FOR DARK MODE TEST)
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // THIS MUST BE HERE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers your App.tsx and components
  ],
  theme: {
    extend: {
      // No custom colors or extensions for this test to keep it simple
    },
  },
  plugins: [],
};

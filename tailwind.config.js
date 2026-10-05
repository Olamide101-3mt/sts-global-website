/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: "#158A4A", deep: "#0C5C32" },
        blue: { DEFAULT: "#0E2E52", mid: "#154A82" },
        red: "#D8432E",
        cream: "#FAF8F3",
        ink: "#1C1C1A",
        gold: "#E0A93A",
        mint: "#4ADE94",
        "grey-line": "#E4E1D8",
        "grey-mid": "#7A7A72",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

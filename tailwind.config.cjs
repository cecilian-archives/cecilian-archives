/** @type {import('tailwindcss').Config} */
const transparentize = require("polished").transparentize;

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://tailwind.simeongriggs.dev/?archiveBlue=2872AF&archiveYellow=FFC71E
        archiveBlue: {
          50: "#f3f8fc",
          100: "#deecf7",
          200: "#bdd9f0",
          300: "#8fbee5",
          400: "#599fd9",
          500: "#2872af",
          600: "#23649a",
          700: "#1e5785",
          800: "#1a4970",
          900: "#12334f",
        },
        archiveYellow: {
          50: "#fffaeb",
          100: "#fff6db",
          200: "#ffedb8",
          300: "#ffe28a",
          400: "#ffd65c",
          500: "#ffc71e",
          600: "#fabb00",
          700: "#e6ac00",
          800: "#d6a100",
          900: "#c29100",
        },
      },
      fontFamily: {
        title: ["Brawler", "serif"],
        body: ["Lato", "sans-serif"],
      },
      backgroundImage: (theme) => {
        const base = transparentize(0.05, theme("colors.archiveBlue.500"));
        const top = transparentize(0.2, theme("colors.archiveBlue.500"));
        return {
          "hero-gradient": `linear-gradient(to top, ${base}, ${top})`,
        };
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

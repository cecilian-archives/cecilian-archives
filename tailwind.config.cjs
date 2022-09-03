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
        grey: {
          // generated from deepBlue with https://palx.jxnblk.com/
          lighter: "#f9f9fa",
          light: "#dee1e4",
          DEFAULT: "#97a1a9",
          dark: "#5f6e7a",
          darker: "#384047",
        },
        deepBlue: {
          // https://github.com/igrmk/blec
          10: "#eef0f4", // blec f9f9fa 2872af:0.1
          20: "#e2e6ed", // blec f9f9fa 2872af:0.2
          30: "#d6dce7", // blec f9f9fa 2872af:0.3
          75: "#8aa2c5", // blec f9f9fa 2872af:0.75
          80: "#7d9ac1", // blec f9f9fa 2872af:0.8
          85: "#6f91bd", // blec f9f9fa 2872af:0.85
          90: "#5f88b8", // blec f9f9fa 2872af:0.9
          93: "#5382b6", // blec f9f9fa 2872af:0.93
          95: "#497eb4", // blec f9f9fa 2872af:0.95
          DEFAULT: "#2872af", // primary
          105: "#1b65a2", // 5% darkened deepBlue
          110: "#0f5996", // 10% darkened deepBlue
          heroBase: transparentize(0.05, "#497eb4"), // deepBlue.95
          heroTop: transparentize(0.2, "#5382b6"), // deepBlue.93
        },
        brightYellow: "#ffc71e", // secondary/accent
        deepGreen: "#448147", // success
        brightOrange: "#ff871e", // warning
        deepRed: "#af284c", // danger
        brightRed: "#e63227",
        brightGreen: "#4fb440",
        brightBlue: "#56c4dc",
        deepPurple: "#5a4d6e",
        brightPurple: "#951e6c",
        brightPink: "#dc2d6c",
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

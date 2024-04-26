/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "public/*.{html,js}",
  ],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      "10xl": [
        "10rem",
        {
          lineHeight: "10rem",
          letterSpacing: "-4px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        gtBlack: ["gtBlack", "sans"],
        gtBold: ["gtBold", "sans"],
        gtMedium: ["gtMedium", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.04em",
        tight: "-.025em",
        normal: "0",
        wide: ".02em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "public/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
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
        tighter: "-.05em",
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

import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        monserrat: ["var(--font-monserrat)"],
      },
      colors: {
        primary: colors.gray[900],
        primaryHover: colors.gray[950],
        secondary: "#3867d6",
        secondaryHover: "#4b7bec",
        tertiary: "#8854d0",
        tertiaryHover: "#a55eea",
        bgLight: colors.gray[50],
        bgDark: "#4b6584",
        textLight: colors.gray[800],
        textDark: colors.gray[200],
        divLeftBlur: "#fbe2b3",
        divRightBlur: "#dbd7fb"
      },
    },
  },
  plugins: [],
};
export default config;

import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

import colors from "tailwindcss/colors"

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5549D8",
        secondary: "#51407D",
        tertiary: "#E8A496"
      },
      fontFamily: {
        // primary: "AirbnbCereal, sans-serif !important",
        secondary: "Recoleta, sans-serif !important", 
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};
export default config;

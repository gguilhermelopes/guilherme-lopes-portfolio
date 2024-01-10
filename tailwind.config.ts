import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['"IBM Plex Mono"', "ui-monospace"],
      },
      colors: {
        primary100: "#FEDA4E",
        primary200: "#FBE02A",
        primary300: "#AD7D00",
        background100: "#202020",
        background200: "#272727",
      },
      keyframes: {
        leftToFull: {
          to: { width: "100%" },
        },
        opacityToFull: {
          to: { opacity: "1" },
        },
        opacityIn: {
          to: { opacity: "initial", transform: "initial" },
        },
      },
      animation: {
        "left-to-full": "leftToFull .3s forwards",
        "opacity-to-full": "opacityToFull .3s forwards",
        "opacity-in": "opacityIn .75s forwards",
      },
    },
  },
  plugins: [],
};
export default config;

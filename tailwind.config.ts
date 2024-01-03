import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary100: "#FEDA4E",
        primary200: "#FBE02A",
        primary300: "#AD7D00",
        background100: "#202020",
        background200: "#272727",
      },
    },
  },
  plugins: [],
};
export default config;

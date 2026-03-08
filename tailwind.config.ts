import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main brand color (buttons, links, highlights)
        primary: "#296CA6",

        // Headings / titles
        "dark-blue": "#245567",

        // Soft backgrounds (cards / sections)
        "pastel-blue": "#9FBDCF",

        // Strong dark text
        "navy-dark": "#0B2338",

        // Main page background
        "base-white": "#F9FBFA",

        // Compatibility with existing classes in project
        "navy-900": "#0B2338",
      },
    },
  },

  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-xs": "10px",
        "custom-3xl": "32px",
        "custom-4xl": "40px",
        "custom-5xl": "56px",
        "custom-6xl": "64px",
      },
      colors: {
        red: "#ff0000",
        "off-black": "#141414",
        "dark-red": "#B40001",
        "dark-metal": "#1B2228",
        gray: "#81848A",
        "natural-black": "#010101",
        "light-black": "020202",
      },
      backgroundImage: {},
      boxShadow: {
        cards: "0px 0px 12px 3px #B6B6B640",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

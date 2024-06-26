import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1188px",
    },
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
        "light-black": "#020202",
        "light-pink": "#FFEBEB",
      },
      backgroundImage: {
        "footer-border-gradient":
          "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #696969 51.56%, rgba(22, 22, 22, 0) 100%)",
      },
      borderRadius: {
        4: "16px",
        6: "24px",
        14: "56px",
      },
      boxShadow: {
        cards: "0px 0px 12px 3px #B6B6B640",
        "faq-card": "0px 2px 44px 3px #5757571A",
        "footer-input": "-13.01px 13.01px 104.09px 0px #A1A1A11A",
      },
      lineHeight: {
        120: "120%",
        126: "126%",
        132: "132%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

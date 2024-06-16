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
        "custom-5xl": "52px",
        "custom-6xl": "64px",
      },
      colors: {
        red: "#650304",
        mineShaft: "#2c2c2c",
        lightBlack: "#060606",
        lightDark: "#060707",
        robinBlue: "#00BCD4",
        offGray: "#848484",
      },
      backgroundImage: {
        blackBlurGradient:
          "linear-gradient(83.69deg, rgba(0, 188, 212, 0.04) -9.02%, rgba(49, 69, 236, 0.04) 149.26%)",
        gradiantBlue:
          "linear-gradient(83.69deg, #00BCD4 -9.02%, #3145EC 149.26%)",
        faqBtnBg:
          "linear-gradient(84deg, rgba(0, 188, 212, 0.04) -9.02%, rgba(49, 69, 236, 0.04) 149.26%)",
        tableContentsBg:
          "linear-gradient(84deg, rgba(0, 188, 212, 0.04) -9.02%, rgba(49, 69, 236, 0.04) 149.26%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        cream: "#f7f5ef",
        signal: "#f5c518",
        acid: "#ffe66a",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(245,197,24,.18)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#9FE870",
        deep: "#163300",
        ink: "#111827",
        cream: "#F7F5EF"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22,51,0,0.10)"
      }
    },
  },
  plugins: [],
};
export default config;

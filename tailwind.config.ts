import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './slices/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "card-name-light": '#999999',
        "card-border": "#CCCCCC"
      },
      boxShadow: {
        "primary-double": "0 4px 6px 1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1)"
      },
      backgroundColor: {
        primary: "rgba(237, 243, 251, 1)"
      }
    },
  },
  plugins: [],
};
export default config;

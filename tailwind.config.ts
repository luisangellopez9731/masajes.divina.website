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
        primary: "#173859",
        primaryText: "#f7fafd",
        secondary: "#a88736",
        secondaryText: "#f7fafd",
      },
    },
  },
  plugins: [],
};
export default config;

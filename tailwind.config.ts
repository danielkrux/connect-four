import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#7945FF",
      darkpurple: "#5C2DD5",
      pink: "#FD6687",
      yellow: "#FFCE67",
      black: "#000000",
      white: "#ffffff",
    },
    fontSize: {
      l: [
        "56px",
        {
          lineHeight: "71px",
          fontWeight: "700",
        },
      ],
      m: [
        "24px",
        {
          lineHeight: "31px",
          fontWeight: "700",
        },
      ],
      s: [
        "20px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
      xs: [
        "16px",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      boxShadow: {
        container: "0px 10px 0px rgba(0, 0, 0, 1)",
        cell: "0px -2px 0px rgba(0, 0, 0, 1)",
      },
      borderWidth: {
        3: "3px",
      },
      rounded: {
        "2xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;

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
        preto: "var(--preto)",
        branco: "var(--branco)",
        azul: "var(--azul)",
        marrom: "var(--marrom)",
        bege: "var(--bege)",
        verde: "var(--verde)"
      },
    },
  },
  plugins: [],
};
export default config;

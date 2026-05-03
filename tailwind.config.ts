import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#030B18",
        panel: "#06152A",
        cyan: "#00C8FF",
        electric: "#007BFF"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 200, 255, 0.18)",
        card: "0 24px 70px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00C8FF 0%, #007BFF 62%, #FFFFFF 130%)",
        "dark-gradient": "linear-gradient(135deg, #030B18 0%, #07142A 52%, #020611 100%)"
      }
    }
  },
  plugins: []
};

export default config;

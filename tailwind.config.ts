import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,md,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#2ecc71",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        ember: "#e74c3c",
        amber: "#f39c12",
        sky: "#3498db",
        bark: "#1a1f1c",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        display: ["'Press Start 2P'", "ui-monospace", "monospace"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        block: "0 0 0 2px rgba(46,204,113,0.4), 0 4px 0 0 rgba(20,83,45,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

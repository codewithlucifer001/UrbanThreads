/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        "gold-light": "#FFC107",
        dark: "#0a0a0a",
        "dark-card": "#1a1a1a",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ["Roboto Slab", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}


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
      },
      backdropBlur: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive"],
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0D2A4F',
        'brand-accent': '#C5A57E',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#3C65F5",
        "color-text": "#06264E"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "company-yellow": "#FFD502"
      },
      backgroundColor: {
        "company-yellow": "#FFD502"
      }
    },
  },
  plugins: [],
};

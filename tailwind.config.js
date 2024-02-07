/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#F37921",
        customWhite: "#ffffff",
        customOrangeplus : "#E26310"
      },
    },
  },
  plugins: [],
};

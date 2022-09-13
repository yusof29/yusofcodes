/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181716",
        secondary: "#6A6A6A",
        bgcolor: "#FFFFFF",
      },
      fontFamily: {
        rubik: "Rubik",
        arvo: "Arvo",
      },
    },
  },
  plugins: [],
};

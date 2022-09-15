/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bglight: "#FFFFFF",
        lightprimary: "#181716",
        lightsecondary: "#696969",

        bgdark: "#1A181F",
        darkprimary: "#FEFEFE",
        darksecondary: "#E4E6DF",
      },
      fontFamily: {
        rubik: "Rubik",
        arvo: "Arvo",
      },
    },
  },
  plugins: [],
};

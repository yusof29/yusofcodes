/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      bglight: "#F9F2ED",
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
};
export const plugins = [];

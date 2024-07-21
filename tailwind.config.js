/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
        primary: "#FF5733",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};

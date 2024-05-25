/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        BarlowCon: ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        clamp: ["clamp(0.9rem, 0.8296rem + 0.3005vw, 1.1rem)"],
        clampTwo: ["clamp(2rem, 1.1197rem + 3.7559vw, 4.5rem)"],
        clampThree: ["clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem)"],
      },
    },
  },
  plugins: [],
};

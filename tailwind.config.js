/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow Condensed"],
      rubik: ["Rubik"],
      roboto: ["Roboto"],
      bellefair: ["Bellefair"],
      sans: ["sans-serif"],
      barlow: ["Barlow Condensed"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "10rem",
    },
    extend: {
      colors: {
        customDark: '#0d0d17',
        customGray: '#a0a1a8',
      },
      transformOrigin: {
        'top-left': '-50% -50%',
      },
      textUnderlineOffset: {
        4: '1.563rem',
      }
    }
  },
  plugins: [],
};

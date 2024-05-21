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
        customWhite: "#fff",
        customGray: "#a0a1a8",
        customBlue: "#d0d6f9",
      },
      transformOrigin: {
        "top-left": "-50% -50%",
      },
      textUnderlineOffset: {
        4: "1.563rem",
      },
    },
    screens: {
      sm: { min: "75px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

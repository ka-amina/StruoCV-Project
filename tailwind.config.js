/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC505D",
        secondary: "#F6EFED",
        brown: "#CA6D18",
        "nu-gray": {
          50: "#83A4B6",
          100: "#797979",
        },
        "nu-blue": {
          50: "#F9F9F9",
          100: "#E4F6FB",
          200: "#1C8EB5",
          300: "#0E6CC2",
          400: "#0000FF",
        },
        input: "#F3DCDC",
      },
      opacity: {
        secondary: "0.38",
      },
      width: {
        input: "35rem",
      },
    },
  },
  plugins: [],
};

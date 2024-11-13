/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B90ED",
        secondary: "#F0F0F0 ",
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
          500: "#0E6CC2"
        },
        input: "#F3DCDC",
        "success":"#28A745",
      },
      opacity: {
        secondary: "0.38",
      },
      width: {
        input: "35rem",
        form: "42.5rem",
      },
    },
  },
  plugins: [],
};

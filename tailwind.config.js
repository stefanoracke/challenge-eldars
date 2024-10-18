/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        white:"#eeeeee",
        primary: "#4a8ecc",
        dark: "#1A1A19",
        danger: "#ff6961"
      }
    },
  },
  plugins: [],
}


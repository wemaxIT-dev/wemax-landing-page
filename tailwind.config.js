/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./services-detail/*.{html,js}"
  ],
 
  theme: {
    extend: {
      fontFamily:{
        'roboto':["Roboto", "sans-serif"],
        'inter':["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}


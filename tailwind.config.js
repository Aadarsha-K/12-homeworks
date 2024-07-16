/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assignments/**/*.html", "./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'main': ["Poppins", "sans-serif"],
      },
      colors:{
        'mmint-50': '#CCEADC',
        'mmint-100': '#C5E8D7',
        'mmint-300': '#B0D0C1',
        'mmint-500': '#86A095',
        'mmint-700': '#32413D',
        'mmint-900': '#253031',
      },
    },
  },
  plugins: [],
}
// https://coolors.co/visualizer/253031-b0d0c1-c5e8d7-32413d-86a095 color palette
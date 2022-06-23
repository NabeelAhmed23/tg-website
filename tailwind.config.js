/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{jsx,js}", "./components/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens:{
        '3xl' : '1920px'
      }
    },
  },
  plugins: [],
}

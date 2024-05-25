/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',"./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
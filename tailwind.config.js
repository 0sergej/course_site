const {colors: {...colors}} = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lg': '1000px'
    },
    colors: {
      colors,
      blue: {
        light: '#0B5579',
        dark: '#0077b3'
      },
      red: {
        light: '#ff1800',
        dark: '#b31200'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      padding: ['last'],

    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#0B5579',
        dark: '#0077b3'
      },
      white: '#fff',
      red: {
        light: '#ff1800',
        dark: '#b31200'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

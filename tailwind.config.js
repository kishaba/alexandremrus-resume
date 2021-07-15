module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        purple: '#5429CF',
        gray: '#202020',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

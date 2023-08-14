const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      black: '#1B2534'
    },
    // screens: {
    //   'sm': '300px',
    //   'lg': '700px'
    // },
    extend: {
      height: {
        '80': '80vh',
      },
      width: {
        'full': '100%',
        'fit': 'fit-content'
      },
      fontSize: {
        '300': '300px',
        '100': '100px',
        '2.5vw': '2.5rem',
        '4vw': '4rem',
        '1.5vw': '1.5rem',
        '1vw': '1rem',
        '1.6vw': '1.4rem',
        '1.25vw': '1.25rem',
        '1.125vw': '1.125rem',
        '40': '40px',
        '32': '32px',
      },
      padding: {
        'vw7': '7vw',
        '5vw': '5vw',
        '4vw': '4vw',
        '3vw': '3vw',
        '2vw': '2vw',
        '3rem': '3rem',
      },
      margin: {
        '2vw': '2vw',
        '7vw': '7vw',
        '5vw': '5vw',
        '4rem': '4rem',
        'none': 'none'
      },
      lineHeight: {
        '2.25vw': '2.25vw',
      }
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}

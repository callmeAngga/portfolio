/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["**/*.{html, js}"],
  theme: {
    extend: {
      height: {
        '22': '5.5rem'
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem'
      },
      colors: {
        // Light Theme
        'primary': '#FFFFFF',
        'onPrimary': '#9996AB',
        'content': '#DEE0ED',
        'button': '#ADDA46',
        'decoration': '#FED211',

        // Dark Theme
        'primaryDark': '#465D6D',
        'onPrimaryDark': '#FFFFFF',
        'contentDark': '#466F81',
        'buttonDark': '#ADDA46',
      },
    },
  },
  plugins: [],
}
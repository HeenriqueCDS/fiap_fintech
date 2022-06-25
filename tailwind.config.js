/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mobileLarge: '425px'
      },
      fontFamily: {
        sans: [
          'Roboto',
        ],
      },
      colors: {
        background :'#141414',
        foreground: '#202024',
        middleground: '#38383D',
        text: {
          light: '#EDEDED',
          dark: '#A19D9D',
        },
        
      }


    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
 
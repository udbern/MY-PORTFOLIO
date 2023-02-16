/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      oldlace: '#fcf5e5',
      crystalblue: '#9ec7cb',
      topaz: '#ffc16e',
      wine: '#b51d46',
      darkwhite: '#FCF8F7',
      offwhite: '#efefef',
      dark: '#f4eaea',
      white: '#FFFFFF',
      black: '#222222',
      facebook:'#3b5998',
      instagram:'#3f729b',
      twitter:'#00acee',
      
    },
    fontFamily:{
      Nerko:['NerkoOne','cursive'],
      Fredoka:['Fredoka One','cursive'],
      Roboto:['Roboto', 'sans-serif'],
    },
    screens: {
      'sm': {'min': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },

  },


  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],



}


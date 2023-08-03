/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      height: {
        11: '100px',
        101: '41rem',
        97: '35rem'
      },

      width: {
        '6.5xl': '79rem',
        '6/13': '55%',
        97: '25rem',
        1.5: '2.3125rem',
        1.4: '2rem'
      },
      maxWidth: {
        '1/2': '50%',
        '9/11': '88%'
      },
      backgroundImage:{
        mainColor: 'linear-gradient(70deg,#44c5e5,#276dc1)'
      },
      colors: {
        mainColor: '#3699d3',
        textMainColor:"#ffffff"
      },
      backgroundColor:{
        mainBackGroundColor:'#1c2635'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}

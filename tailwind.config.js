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
      backgroundImage: {
        mainColor: 'linear-gradient(70deg,#44c5e5,#276dc1)',
        shareACar:
          "url('https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63d8276f5f590e8cd734e67c_shareacar2tiny.jpg')",
        bannerComunity:"url('https://assets-global.website-files.com/5c19140f997c250869180aa0/642c5727f0b7763cbb82c314_onboardbonus.png')"
      },
      colors: {
        mainColor: '#3699d3',
        textMainColor: '#ffffff'
      },
      backgroundColor: {
        mainBackGroundColor: '#1c2635'
      },
      margin: {
        bottom: '105px',
        mbGettingStarted:'29px'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            scrollY: 0
          },
          '100%': {
            scrollY: 100
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        zomOutControlThumB: {
          '0%': {
            opacity: 1,
            height: '80px',
            width: '80px',
            transform: 'scale(1)'
            // border: "1px solid rgba(255,255,255,0.4)",
          },
          '100%': {
            opacity: 0,
            height: '80px',
            width: '80px',
            transform: 'scale(2)'
            // border: "1px solid rgba(255,255,255,0.4)",
          }
        },
        customBounce: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        zomOutControlThumB: 'zomOutControlThumB 0.5s ease-in-out',
        fadeIn: 'fadeIn 1s ',
        fadeOut: 'fadeOut 0.3s ease-in-out',
        customBounce:'customBounce 1.5s infinite'
      },
      fontSize:{
        textSizeHostingTitle:'32px'
      },
      

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

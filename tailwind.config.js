/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.js', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideInBottom: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideInTop: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        jumpy: {
          '0%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-5px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '75%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
          grow: {
            '0%': {
              transform: 'scale(1)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
          animation :{
            slideInLeft: 'slideInLeft 0.5s ease-in-out',
            slideInRight: 'slideInRight 0.5s ease-in-out',
            slideInBottom: 'slideInBottom 0.5s ease-in-out',
            slideInTop: 'slideInTop 0.5s ease-in-out',
            fadeIn: 'fadeIn 0.5s ease-in-out',
            jumpy: 'jumpy 0.5s ease-in-out',
            grow: 'grow 0.5s ease-in-out',
          }
        },
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    	require('autoprefixer'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ["Noto Sans Display", "sans-serif"],
        'pt': ["PT Sans Caption", "sans-serif"],
        'alegraya': ["Alegreya Sans", "sans-serif"],
        'didact': ["Didact Gothic", "sans-serif"],
        'maven': ["Maven Pro", "sans-serif"],
        'exo' : ["Exo 2", "sans-serif"],
        'barlow': ["Barlow Condensed", "sans-serif"],
        'kdam': ["Kdam Thmor Pro", "sans-serif"],
        'josefin': ["Josefin Sans", "sans-serif"],
        'anta': ["Anta", "sans-serif"]
      },
      animation: {
        'clip-text-from-below': 'clip-polygon 1.5s ease-in-out',
        'menu-drop': 'clip-polygon-reverse 600ms ease-in-out',
        'clip-text-from-above': 'clip-polygon-reverse 1.5s ease-in-out',
        'spotlight': 'spotlight 4s ease-in-out',
      },
      keyframes: {
        'spotlight': {
          '0%': {
            'clip-path': 'circle(100% at 50% 50%)',
          },
          '20%': {
            'clip-path': 'circle(20% at 50% 50%)'
          },
          '40%': {
            'clip-path': 'circle(20% at 12% 84%)'
          },
          '60%': {
            'clip-path': 'circle(20% at 93% 51%)',
          },
          '80%': {
            'clip-path': 'circle(20% at 10% 20%)', 
          },
          '100%': {
            'clip-path': 'circle(110% at 53% 41%)', 
          }
        },
        'clip-polygon': {
          '0%': {
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          },
          '25%': {
            'clip-path': 'polygon(0 86%, 100% 80%, 100% 100%, 0% 100%)',
          },
          '50%': {
            'clip-path': 'polygon(0 40%, 100% 50%, 100% 100%, 0% 100%)',
          },
          '75%': {
            'clip-path': 'polygon(0 26%, 100% 26%, 100% 100%, 0% 100%)',
          },
          '100%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }
        },
        'clip-polygon-reverse': {
          '0%': {
            'clip-path':'polygon(0 0, 100% 0, 100% 0, 0 0)'
          },
          '25%': {
            'clip-path':'polygon(0 0, 100% 0, 100% 26%, 0 20%)'
          },
          '50%': {
            'clip-path':'polygon(0 0, 100% 0, 100% 50%, 0 45%)'
          },
          '75%': {
            'clip-path':'polygon(0 0, 100% 0, 100% 86%, 0 86%)'
          },
          '100%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }
        }
      }
    },
  },
  plugins: [],
}


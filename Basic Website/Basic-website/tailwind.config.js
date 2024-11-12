/**@type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lamboImage': "url('./src/assets/lambo-gallardo.jpg')"
      },
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Geist: ['Geist', 'sans-serif']
      },
      keyframes: {
        listStarting: {
          "0%": { transform: 'translateY(-100%)', scale: '.7' },
          "100%": { transform: 'translateY(0)', scale: '1' },
        },
        bgAnimation: {
          '0%': { backgroundPosition: 'right' },
          '100%': { backgroundPosition: 'left' },
        },
        profileAnimation: {
          '0%': { display: 'flex', gap: '1rem' },
          '100%': { display: 'flex', gap: '-20px' }
        }
      },
      animation: {
        'listStarting': 'listStarting 1.5s ease-in-out',
        'bgAnimation': 'bgAnimation 1s ease-in-out',
        'profileAnimation': 'profileAnimation 1s ease-in-out',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'big': '115%',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-2': {
          '-webkit-text-stroke': '1px black',
        }
      })
    }
  ]
}

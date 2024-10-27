/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      const spinAnimation = {
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      };

      const beforeBox = {
        '.before-box': {
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '380px',
            height: '420px',
            background: 'linear-gradient(0deg, #7dde1e7, #394d9b, #0f1638, #a8d897)',
            zIndex: '-1',
            animation: 'spin 1s linear infinite',
          },
        },
      };

      addUtilities(spinAnimation);
      addComponents(beforeBox);
    },
  ],
}
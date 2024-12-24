/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".linkHover": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "-5px",
            left: "0",
            backgroundColor: "#32AA27",
            transition: "all 0.3s ease-in-out",
            opacity: 0,
            transform: 'translateY(5px)'
          },
          "&:hover::after": {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        ".textAfter": {
          position: "relative",

          // "&::after": {
          //   content: "''",
          //   background:
          //     "url('https://cdn.b12.io/client_media/aqnomJBm/a5a5c320-b7be-11ef-886e-0242ac110002-jpg-hero_image.jpeg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   position: "absolute",
          //   bottom: 0,
          //   right: 0,
          //   width: '30%',
          //   height: "100%",
          //   display: "block",
          //   transform: 'scale(1.5)'
          // },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

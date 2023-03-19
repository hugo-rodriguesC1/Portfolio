module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ici vos couleurs exportées de Figma
      },
      fontFamily: {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
      screens: {
        "3xl": "1700px",
        "xs": "600px",

      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

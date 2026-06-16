/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          white: '#FFFFFF',
          gold: '#C8A165',
          champagne: '#EADCC8',
          warm_gray: '#F5F2EE',
        }
      },
      fontFamily: {
        clash: ["ClashDisplay", "sans-serif"],
        clashmedium: ["ClashDisplayMedium", "sans-serif"],
        clashsemibold: ["ClashDisplaySemiBold", "sans-serif"],
        clashbold: ["ClashDisplayBold", "sans-serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
}

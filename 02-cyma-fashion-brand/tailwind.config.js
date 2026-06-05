/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          greendeep: "#0D3B2E",
          greenlight: "#1E5A47",
          golddeep: "#C6A04D",
          goldlight: "#D8B76A",
          cream: "#F8F6F1",
          dark: "#111111",
          white: "#FFFFFF",
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

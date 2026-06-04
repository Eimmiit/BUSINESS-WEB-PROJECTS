/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
                extend: {
                    colors: {
                        brand: {
                            crimson: '#BD1F6A',
                            gold: '#C5A880',
                            cream: '#FCF8F4',
                            dark: '#0B0B0B'
                        }
                    },
                    fontFamily: {
                        serif: ['Cormorant Garamond', 'serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            },
  plugins: [],
}


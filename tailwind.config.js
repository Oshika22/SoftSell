// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Roboto: ['Roboto', 'cursive'],
      Courgette: ['Courgette', 'cursive'],
      Montserrat: ['Montserrat', 'cursive'],
      },
    },
  },
  plugins: [],
}

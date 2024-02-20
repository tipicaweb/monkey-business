/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "CircularStd"
      },
      colors: {
        primary_green: '#00EBB0',
        secondary_green: '#C5F6E2',
        primary_black: '#181A19',
        secondary_black: '#262928',
        text_hover: '#292926',
        terciary_black: '#FEF7FF14',
      }
    }
  },
  plugins: [],
}


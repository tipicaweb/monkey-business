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
        primary_orange: '#FFA65E',
        top_first: '#FFD75E',
        top_second: '#D2D0D1',
        top_third: '#FFA65E',
        primary_gray: '#8F9997',
      }
    }
  },
  plugins: [],
}


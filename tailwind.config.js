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
          primary_red: '#E86987',
          primary_blue: '#381E72',
          secondary_blue: '#1D192B',
          secondary_white: '#FBFDF9',
          top_first: '#FFD75E',
          top_second: '#D2D0D1',
          top_third: '#FFA65E',
          primary_gray: '#8F9997',
          secondary_gray: '#BFC9C2',
          terciary_gray: '#E0E9E7',
          input_bg: '#343B39',
          input_border: '#C4D0CD',
          input_border_disabled: '#49454F',
          input_bg_disabled: '#E6E0E90A',
          input_focus: '#00ECAE',
          input_invalid: '#F2B8B5',
          img_border: '#D9D9D9',
          table_hover: "#E6E0E914"
        }
      }
    },
    plugins: [],
  }
  
  
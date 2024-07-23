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
          secondary_violet: '#FF0000',
          primary_black: '#181A19',
          secondary_black: '#262928',
          secondary_black_hover: '#363A39',
          text_hover: '#292926',
          terciary_black: '#FEF7FF14',
          primary_orange: '#FFA65E',
          primary_red: '#E894A8',
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
          input_bg_hover: '#464D4B',
          input_border: '#C4D0CD',
          input_border_disabled: '#49454F',
          input_bg_disabled: '#E6E0E90A',
          input_focus: '#00ECAE',
          input_invalid: '#F2B8B5',
          img_border: '#D9D9D9',
          table_hover: "#E6E0E914",
          btn_border: '#79747E',
          btn_secondary_bg: '#445850',
          btn_secondary_bg_hover: '#516A60',
          btn_secondary_bg_active: '#67887B',
          btn_secondary: '#DEF8EE',
          dropdown_hover: '#4A5452',
          status_ongoing: '#85A7FF',
          status_scanned: '#00EBB0',
          status_future: '#FFA65E',
          status_past: '#E894A8',
        }
      }
    },
    plugins: [],
  }
  
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "CircularStd"
      },
        colors: {
            main: '#262928',
            component: '#181A19',
            main_text: '#00EBB0',
            header: '#181A19',
            button_hover: '#C5F6E2',
            text_hover: '#292926'
        }
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "main": "#FF8304",
        "main-darkblue": "#153049",
        "main-blue": "#304F6C",
        "main-text": "#24323F",
      },
      fontFamily:{
        sans: ['Montserrat'],
        Montserrat: ["Montserrat, sans-serif"],
      },
      screens: {
        'sm': {'min': '640px'},
        'md': {'min':'768px'},
        'lg': {'min': '1064px'},
        'xl': {'min': '1064px'},
        '2xl': {'min': '1064px'},
        '-sm': {'max': "640px"},
        '-md': {'max': "768px"},
        '-lg': {'max': "1031px"},
        '-xl': {'max': '1064px'},
        '-2xl': {'max': '1064px'},
      },
    },
    borderRadius:{
      DEFAULT : '0.5rem',
      'm' : '5px',
      'o' : '10px'
    },
    zIndex: {
      '1': '1',
    }
  },
  plugins: [],
}

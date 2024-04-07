/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        nilla: "#00baf2",
        darknilla: "#002970",
        graye: "#F4F4F5",
        hov: "#00AFE3",
        hove: "#0D3E80",
        bgc: "#F5F7FA",
      },
      spacing: {
        '18': '66px',
        '85': '352px',
      },
      screens: {
        'verysmall': { 'max': '390px' },
        'small': '400px',
        'medium': '760px',
        'large':{'min':"1070px"},
        
     }
    },
  },
  plugins: [],
}


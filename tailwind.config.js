/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true
    },
    top: {
      produktop: "400px"
    },
    extend: {
      colors: {
        primary: '#960E0D',
        Text: "",
        
      },
      screens : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}


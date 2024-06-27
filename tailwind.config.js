/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./coverage.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dcpn': '#393737',
      },
    },
  },
  plugins: [],
}


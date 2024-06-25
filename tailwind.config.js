/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./coverage.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        'dcpn': '#302f2f',
      }
    },
  },
  plugins: [],
}


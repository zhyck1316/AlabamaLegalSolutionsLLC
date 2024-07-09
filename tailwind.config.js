/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./coverage.html", "./about.html", "./pricing.html", "./aboutus.html", "./src/**/*.{html,js},", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'dcpn': '#302f2f',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


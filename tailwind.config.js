/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-color-light-orange': "#F9AF23",
        'primary-color-dark-orange': "#F79326"
      },
      backgroundImage: {
        'main-wallpaper': "url('./assets/images/image2.jpeg')"
      },
      boxShadow: {
        "background-shadow": "inset 0 0 0 1000px rgba(0,0,0,.2)"
      }
    },
  },
  plugins: [],

}



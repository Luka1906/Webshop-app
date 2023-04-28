import images from './src/assets/images/image6.jpeg'
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
        'primary-color-dark-orange': "#F79326",
        'primary-color-red': "#e50010",
        'text-color': "#232b2b",
        'bg-color': "	#FFFAFA"
       
        
       
      },
      backgroundImage: {
        'main-wallpaper': "url('././assets/images/wallpaper/image1.jpeg')",
        'jersey-pic': "url('././assets/images/items/image4.jpeg')",
        'rakija-pic':  "url('././assets/images/items/image7.jpeg')"

       
      },
      boxShadow: {
        "background-shadow": "inset 0 0 0 1000px rgba(0,0,0,0.25)",
        "image-shadow": "inset 0 0 0 1000px rgba(0,0,0,0.20)",
        "card-shadow": "0 2px 8px rgba(0,0,0,0.50)",
        "backdrop-shadow": "inset 0 0 0 1000px rgba(0,0,0,0.65)"
    
      },
      fontSize: {
        title: '1.6rem',
        subtitle: "1.4rem",
        paragraph: '1.2rem',
      
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "bold-lato": ['Bold-Lato', 'sans-serif'],
        "semi-bold-lato": ["Semi-Bold-Lato", 'sans-seri'],
      }
    },
  },
  plugins: [],

}



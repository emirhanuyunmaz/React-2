/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },

    backgroundSize: {
      '50%': '50%',
      '100%': '100%',
      "100" : "100rem"
    }, 
    height:{
      "100" : "25rem",
      "120" : "30rem",
    }
  },
  plugins: [],
}
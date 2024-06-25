/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    width:{
      "100%":"100%",
      "60%":"60%",
      "50%":"50%",
      "45%":"45%",
      "40%":"40%",
    },
    height:{
      "100%":"100%"
    }

  },
  plugins: [],
}
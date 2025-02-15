/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    height:{
      "100%" : "100%",
      "100vh":"100vh"
    }
  },
  plugins: [],
}
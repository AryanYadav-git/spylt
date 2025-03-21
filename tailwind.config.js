/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#eee5da',
        secondary: '#262424',
        paynes: '#536878',
        pearl: "#eae0c8",
        dutchWhite:"efdfbb",
        wine:"722f37",
      },
      fontFamily:{
        oswald: ["Oswald", "sans-serif"],
        body: ["Big Shoulders", "sans-serif"]
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#E2E2E2',
      'blue': '#1A71FF',
      'red': '#FF4949',
      'blueish':'#1E2757',
      'black': '#161929',
      'blackish': '#242737',
      'dark': '#1F2335',
      'dark1': '#171718'
      
    },
    extend: {},
  },
  plugins: [],
}

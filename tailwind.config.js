/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#222831',
        blue: '#2d4059',
        orange: '#ff5722',
        grey: '#eeeeee',
      },
    },
  },
  plugins: [],
}
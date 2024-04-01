/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      white: '#FFF',
      primary: '#1C4C41',
      secondary: '#D9D9D9',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
}


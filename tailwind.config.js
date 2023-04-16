/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '900px',
      llg: '1000px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        blue: '#2962FF'
      },
    },

  },
  plugins: [],
}
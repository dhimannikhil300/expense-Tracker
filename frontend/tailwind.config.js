/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary-color': '#222260',
      'primary-color2': 'rgba(34, 34, 96, .6)',
      'primary-color3': 'rgba(34, 34, 96, .4)',
      'color-green': '#42AD00',
      'color-grey': '#aaa',
      'color-accent': '#F56692',
      'color-delete': '#FF0000',
      'background': 'rgba(252, 246, 249, 0.78)',
    },
    extend: {},
  },
  plugins: [],
}
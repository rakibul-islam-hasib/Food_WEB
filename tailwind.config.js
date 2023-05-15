/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8A1E86',
        'secondary': '#F76FC1',
        'tertiary': '#F76FC1',
      }, 
      backgroundImage : { 
        'hero-pattern': 'url("./src/assets/img2.jpg")',
        'login-bg' : 'url("./src/assets/login-bg.jpg")',
      }
    },
  },
  plugins: [],
}
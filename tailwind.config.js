/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2a8037',
        'brand-light': '#F5F5F5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'kohinoor': ['Kohinoor Bangla', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
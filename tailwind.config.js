/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        gold: '#FFD700',
        forestGreen: '#228B22',
        jade: '#00A86B',
      },
    },
  },
  plugins: [],
};
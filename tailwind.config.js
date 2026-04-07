/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#9E7758',
          light: '#C49870',
          dark: '#7A5B42',
        },
        coral: {
          DEFAULT: '#FF7F50',
          light: '#FF9F80',
          dark: '#DF5F30',
        },
        charcoal: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          dark: '#0A0A0A',
        }
      },
      fontFamily: {
        heading: ['Forum', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

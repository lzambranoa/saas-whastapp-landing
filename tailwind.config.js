/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#542C49',
          dark: '#3E2137',
          light: '#7A4F71',
        },
        secondary: {
          DEFAULT: '#E38AAE',
          dark: '#C76F93',
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};

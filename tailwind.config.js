import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pink: {
          100: '#fef1f8',
          200: '#ffe9f5',
          300: '#fddfef',
          400: '#ffd7ec',
          500: '#ffc9e5',
          600: '#ffb3db',
          700: '#ffa5d4',
          800: '#fd83c4',
          900: '#d1516d',
        },
        silver: '#f8f8f8',
      },
    },
  },
  plugins: [],
};

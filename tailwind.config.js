/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      primary: '#37B151',
      danger: '#f3575a',
    },
    extend: {},
  },
  plugins: [],
};

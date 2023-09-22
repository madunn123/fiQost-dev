/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#7879F1',
        'secondary-color': '#AFA2C3',
        'font-colors': '#3E334E',
        'thirdy-color': '#AEAFF7',
      },
      accentColor: {
        'main-accent': '#7879F1',
      },
      fontFamily: {
        sans: ['Inter', 'sans'],
      },
    },
  },
  plugins: [],
};

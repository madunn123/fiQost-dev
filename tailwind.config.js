/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#3B82F6',
        'secondary-color': '#AFA2C3',
        'font-colors': '#111827',
        'thirdy-color': '#DBEAFE',
        'white-colors': '#fff',
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

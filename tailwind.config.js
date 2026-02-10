/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#22c55e',
        'main-dark': '#049c41',
        'main-light': '#f0fdf4',
        'support': '#ffd700',
        'light': '#fcfffc',
        'dark': '#111',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'dark-hover': '#444',
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
    },
  },
  plugins: [],
}


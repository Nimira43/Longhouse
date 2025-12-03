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
        'main-dark': '#15803d',
        'main-light': '#f0fdf4',
        'support': '#ffd700',
        'light': '#f0fdf4',
        'dark': '#111',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'grey-hover': '#555',
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
    },
  },
  plugins: [],
}


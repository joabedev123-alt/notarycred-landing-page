/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nc-navy-dark': '#161F29',
        'nc-navy-blue': '#0C3654',
        'nc-tech-blue': '#0F7FB6',
        'nc-trust-green': '#189E4F',
        'nc-teal-title': '#158E86',
        'nc-text-gray': '#4F5E68',
        'nc-light-blue': '#85C1CC',
        'nc-soft-bg': '#EBF7F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

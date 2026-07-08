/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nc-blue': '#002E5D', // Azul institucional escuro
        'nc-blue-light': '#005BBB', // Azul mais claro
        'nc-gold': '#C5A866', // Dourado
        'nc-gold-light': '#E0CB94', // Dourado mais claro
        'nc-gray': '#F7F8F9', // Cinza muito claro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nc-navy-dark': '#0B1F33',
        'nc-navy-blue': '#0A3A63',
        'nc-primary-blue': '#0057B8',
        'nc-tech-blue': '#1286D8',
        'nc-cyan-blue': '#00A9E8',
        'nc-light-blue': '#7CC7F2',
        'nc-ice-blue': '#EAF6FF',
        'nc-soft-bg': '#F6FBFF',
        'nc-text-dark': '#102A43',
        'nc-text-gray': '#5F6F7E',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

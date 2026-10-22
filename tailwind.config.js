/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { forest: '#103F32', ivory: '#F7F5EF', gold: '#B79A5E' },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: { soft: '0 18px 55px rgba(16, 63, 50, 0.10)' },
    },
  },
  plugins: [],
}

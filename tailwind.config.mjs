/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          soft: '#1d4ed8',
        },
      },
      boxShadow: {
        'xl-soft': '0 24px 80px rgba(15,23,42,0.65)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
}
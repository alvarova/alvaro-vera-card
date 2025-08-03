/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'accent-red': '#FF0000',
        'primary-black': '#000000',
        'primary-white': '#FFFFFF',
        'secondary-gray': '#666666',
      },
      fontSize: {
        'hero-title': ['4.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-title-mobile': ['3rem', { lineHeight: '1.1', fontWeight: '900' }],
        'section-title': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-title-mobile': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
}
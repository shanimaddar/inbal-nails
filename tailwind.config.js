/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:            '#E8C4C4',
          cream:           '#FAF7F5',
          burgundy:        '#8B3A52',
          'burgundy-dark': '#6B2D3E',
          graphite:        '#2D2D2D',
          'pink-light':    '#F2D5D5',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(145deg, #8B3A52 0%, #A84B65 45%, #C47A8A 100%)',
      },
    },
  },
  plugins: [],
}

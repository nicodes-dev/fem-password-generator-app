/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-out': 'fade-out 1s ease-out forwards',
      },
      keyframes: {
        'fade-out': {
          '0%,100%': {
            opacity: '0',
          },
          '50%': { opacity: '100%' },
        },
      },
      colors: {
        'neutral-300': 'hsla(252, 11%, 91%, 1)',
        'neutral-500': 'hsla(251, 9%, 53%, 1)',
        'neutral-700': 'hsla(247, 11%, 15%, 1)',
        'neutral-900': 'hsla(248, 15%, 11%, 1)',
        'accent-green': 'hsla(127, 100%, 82%, 1)',
        'accent-red': 'hsla(0, 90%, 63%, 1)',
        'accent-orange': 'hsla(13, 96%, 67%, 1)',
        'accent-yellow': 'hsla(42, 91%, 69%, 1)',
      },
      fontSize: {
        normal: [
          '1rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        body: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        'heading-m': [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        'heading-l': [
          '2rem',
          {
            lineHeight: '2.625rem',
          },
        ],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: '#D9DCE2',
          light: '#EEF0F4',
          dark: '#B8BCC6',
        },
        plum: {
          DEFAULT: '#521F35', // Darker rich plum
          dark: '#381323',
          deep: '#2C0D1B',
          surface: '#44182B',
          card: '#4E1B31',
          gloss: '#61243E',
        },
        luxora: {
          DEFAULT: '#9E5370', // Darker rich luxora rose
          hover: '#B26483',
          soft: '#C47C99',
        },
        luxura: {
          DEFAULT: '#9E5370',
          hover: '#B26483',
          soft: '#C47C99',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

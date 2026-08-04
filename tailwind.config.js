/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#141414',
        accent: '#F97316', // Laranja Flamejante
        textMain: '#F5F5F5',
        textDark: '#E8E4DD'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        drama: ['Space Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

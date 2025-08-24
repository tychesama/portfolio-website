/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        neutral: 'var(--color-neutral)',
        alternate: 'var(--color-alternate)',
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar-hide'),
  ],
}


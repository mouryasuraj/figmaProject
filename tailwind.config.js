/** @type {import('tailwindcss').Config} */
const config = {
  content: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '433px',
        'md': '1025px',
        'lg': '1450px',
        'xl': '1500px',
      },
    },
  },
  plugins: [],
}

export default config;
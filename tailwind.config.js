/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          primary: '#0ea5e9',
          secondary: '#06b6d4',
          accent: '#10b981',
        }
      }
    },
  },
  plugins: [],
}
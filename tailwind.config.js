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
          primary: '#8B0000',      // Rojo sangre oscuro
          secondary: '#DC143C',    // Crimson
          accent: '#B22222',       // Firebrick
          blood: '#660000',        // Rojo sangre muy oscuro
          darkRed: '#4A0000',      // Rojo casi negro
        }
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(139, 0, 0, 0.5)',
        'blood': '0 4px 20px rgba(220, 20, 60, 0.4)',
        'dark-red': '0 10px 40px rgba(75, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes definir tus colores "innovadores"
        primary: "#0f172a", // Un azul muy oscuro para el fondo
        accent: "#38bdf8",  // Un celeste brillante para detalles
      },
    },
  },
  plugins: [],
}


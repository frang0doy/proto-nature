/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Asegúrate de incluir .jsx
    "node_modules/flowbite/**/*.js", // Añadir para que tailwind detecte los archivos JS de Flowbite
  ],
  theme: {
    extend: {
      fontFamily: {
        // Definir una fuente personalizada globalmente (ejemplo con 'Roboto')
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Personaliza tamaños de texto más allá de los predeterminados
        'xxs': '0.65rem', // Extra extra pequeño
        'lg': '1.125rem',  // Grande, ligeramente más grande que el tamaño base
        '2xl': '1.75rem',  // Más grande para títulos
        '3xl': '2.25rem',  // Aún más grande para encabezados principales
        '4xl': '3rem',     // Títulos muy grandes
        '5xl': '4rem',     // Títulos gigantes
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Agregar Flowbite como plugin de Tailwind
  ],
}

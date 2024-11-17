/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Asegúrate de incluir .jsx
    "node_modules/flowbite/**/*.js", // Añadir para que tailwind detecte los archivos JS de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Agregar Flowbite como plugin de Tailwind
  ],
}

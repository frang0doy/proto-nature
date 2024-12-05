import React from "react";

export function Stats() {
  return (
    <div className="relative py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">ALGUNOS NUMEROS EN EL MUNDO</h2>
        <h4 className="text-2xl font-semibold mb-6">Cuando usás energía limpia, hacés de nuestro planeta un mejor hogar.</h4>
        
        <div className="flex justify-center items-center space-x-8">
          {/* Primer bloque de datos (Card 1) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Creación 24 Millones de Empleos</h3>
            <p className="text-lg">Para el 2045 en el sector energético renovable</p>
          </div>

          {/* Segundo bloque de datos (Card 2) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">1,1 Millones de Autos Eléctricos</h3>
            <p className="text-lg">Para el 2020</p>
          </div>

          {/* Tercer bloque de datos (Card 3) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Hidroponia es 6 veces mas eficiente por m2</h3>
            <p className="text-lg">Que la agricultura convencional</p>
          </div>
        </div>

        <p className="mt-8 text-xl">
        Argentina debe llegar al 20% de su
        matríz energética renovable para el 2025
        </p>
        <p>Actualmente cuenta sólo con el 4%</p>
      </div>
    </div>
  );
}

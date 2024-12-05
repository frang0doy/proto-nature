import React from "react";

export function Stats() {
  return (
    <div className="relative py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Datos Estadísticos de la Empresa</h2>
        
        <div className="flex justify-center items-center space-x-8">
          {/* Primer bloque de datos (Card 1) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Total Ventas</h3>
            <p className="text-lg">2,348,199</p>
          </div>

          {/* Segundo bloque de datos (Card 2) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Clientes Activos</h3>
            <p className="text-lg">1,752</p>
          </div>

          {/* Tercer bloque de datos (Card 3) */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Proyectos Completados</h3>
            <p className="text-lg">578</p>
          </div>
        </div>

        <p className="mt-8 text-xl">
          Estos son algunos de los datos más importantes que reflejan el crecimiento y éxito continuo de nuestra empresa.
        </p>
      </div>
    </div>
  );
}

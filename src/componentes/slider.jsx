"use client";

import React from "react";
import { Carousel } from "flowbite-react"; // Asegúrate de tener instalada la librería Flowbite

export default function Slider() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
      <Carousel slideInterval={5000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="Imagen 1"
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="Imagen 2"
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="Imagen 3"
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="Imagen 4"
          className="w-full h-full object-cover"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="Imagen 5"
          className="w-full h-full object-cover"
        />
      </Carousel>
      {/* Agregar controles de navegación personalizados si es necesario */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          className="text-white bg-purple-600 hover:bg-purple-700 rounded-full p-2"
          aria-label="Anterior"
        >
          &#10094;
        </button>
        <button
          className="text-white bg-purple-600 hover:bg-purple-700 rounded-full p-2"
          aria-label="Siguiente"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

// src/componentes/Slider.jsx
import React, { useState } from "react";

const Slider = () => {
  // Estado para manejar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes del slider
  const images = [
    "https://via.placeholder.com/800x300/FF5733/ffffff?text=Imagen+1",
    "https://via.placeholder.com/800x300/33FF57/ffffff?text=Imagen+2",
    "https://via.placeholder.com/800x300/5733FF/ffffff?text=Imagen+3",
    "https://via.placeholder.com/800x300/FFD700/ffffff?text=Imagen+4",
    "https://via.placeholder.com/800x300/8A2BE2/ffffff?text=Imagen+5"
  ];

  // Funciones para cambiar de slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-full">
      {/* Imagen del Slider */}
      <div className="w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full object-cover h-64 sm:h-80 lg:h-96 transition-all duration-300"
        />
      </div>

      {/* Botones de navegación (Previo y Siguiente) */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Botones circulares debajo de las imágenes */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

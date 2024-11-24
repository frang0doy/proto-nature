// src/componentes/Slider.jsx
import React, { useState } from "react";

const Slider = () => {
  // Estado para manejar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes del slider
  const images = [
    "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-Support-Hero-1920x1080_0000_IMG_3773.jpg-1024x576.jpg",
    "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-1920x1080_0001_IMG_1363.jpg.jpg",
    "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-1920x1080_0005_IMG_2057.jpg.jpg"
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
          className="w-full h-70 object-cover transition-all duration-300"
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
            className={`w-2 h-2 rounded-full ${
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

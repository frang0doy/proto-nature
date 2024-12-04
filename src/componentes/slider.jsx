import React, { useState, useEffect } from "react";

const Slider = () => {
  // Estado para manejar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes del slider
  const images = [
    "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-1920x1080_0004_494A8821.jpg.jpg",
    "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-1920x1080_0005_IMG_2057.jpg.jpg",
    "https://i0.wp.com/innovation-village.com/wp-content/uploads/2024/08/d.light_.jpg?fit=750%2C555&ssl=1",
    "https://technext24.com/wp-content/uploads/2024/08/Screenshot-2024-08-20-at-11.47.42.png"
  ];

  // Función para cambiar de imagen automáticamente
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5000ms = 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden mx-auto">
      {/* Contenedor del slider con margen constante */}
      <div className="relative w-full h-full flex justify-center items-center">
        
        {/* Contenedor de las imágenes con transición horizontal */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Desplazamiento según el índice
          }}
        >
          {/* Imagen previa */}
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen actual (central) */}
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen siguiente */}
          <div className="flex-shrink-0 w-full h-full">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Puntos de navegación debajo de las imágenes */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

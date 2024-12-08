import React, { useState } from "react";

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "http://www.protonature.com/img/hero-bg.jpg",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" // Nueva imagen
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[calc(100vh-60px)]"> {/* Se ajusta al alto de la pantalla */}
      {/* Slider Images */}
      <div className="relative w-full h-full">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
        >
          &lt; {/* Flecha hacia la izquierda */}
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
        >
          &gt; {/* Flecha hacia la derecha */}
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 z-50 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-4 h-1 rounded-2xl cursor-pointer transition-all ${
              activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

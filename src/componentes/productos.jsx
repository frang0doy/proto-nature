import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Productos = () => {
  const carouselRef = useRef(null);

  // Funciones para desplazar el carrusel
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section className="productos-section py-10">
      <div className="container mx-auto text-right px-4">
        <h2 className="text-4xl font-bold text-gray-800">Nuestros Productos</h2>
        <p className="mt-4 text-gray-600">Empoderar soluciones para la Transformación de la vida</p>

        {/* Carrusel de productos */}
        <div className="mt-8 relative">
          {/* Botones de navegación solo visibles en móvil */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full shadow-lg md:hidden"
            aria-label="Desplazar carrusel a la izquierda"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x scroll-smooth pb-4 justify-center"
          >
            {/* Card 1 */}
            <div className="cursor-pointer rounded-[30px] overflow-hidden flex flex-col h-[440px] transition-all duration-500 hover:bg-white hover:shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] bg-white shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] p-6 px-10 transform hover:scale-105 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center justify-center h-[220px] mb-4">
                <img 
                  alt="Sistemas solares casero" 
                  className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  src="https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx2000%2Fx2000-1.png&w=640&q=75" 
                />
              </div>
              <div className="flex items-center flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 text-[#020202]">
                  Sistemas solares casero
                </h3>
                <p className="text-lg md:text-xl mb-4 text-center transition-colors duration-300 text-black/80">
                  Potencia solar flexible para un mañana más brillante
                </p>
                <button className="relative flex items-center justify-start rounded-full h-12 group">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="cursor-pointer rounded-[30px] overflow-hidden flex flex-col h-[440px] transition-all duration-500 hover:bg-white hover:shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] bg-white shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] p-6 px-10 transform hover:scale-105 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center justify-center h-[220px] mb-4">
                <img 
                  alt="Inversores solares" 
                  className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  src="https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-3.png&w=640&q=75" 
                />
              </div>
              <div className="flex items-center flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 text-[#020202]">
                  Inversores solares
                </h3>
                <p className="text-lg md:text-xl mb-4 text-center transition-colors duration-300 text-black/80">
                  Tecnología avanzada para aprovechar al máximo la energía solar
                </p>
                <button className="relative flex items-center justify-start rounded-full h-12 group">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="cursor-pointer rounded-[30px] overflow-hidden flex flex-col h-[440px] transition-all duration-500 hover:bg-white hover:shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] bg-white shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] p-6 px-10 transform hover:scale-105 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center justify-center h-[220px] mb-4">
                <img 
                  alt="Áticos solares" 
                  className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  src="https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-4.png&w=640&q=75" 
                />
              </div>
              <div className="flex items-center flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 text-[#020202]">
                  Áticos solares
                </h3>
                <p className="text-lg md:text-xl mb-4 text-center transition-colors duration-300 text-black/80">
                  Innovación para espacios con energía limpia y eficiente
                </p>
                <button className="relative flex items-center justify-start rounded-full h-12 group">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="cursor-pointer rounded-[30px] overflow-hidden flex flex-col h-[440px] transition-all duration-500 hover:bg-white hover:shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] bg-white shadow-[0px_12px_78px_0px_rgba(0,0,0,0.07)] p-6 px-10 transform hover:scale-105 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center justify-center h-[220px] mb-4">
                <img 
                  alt="Linternas solares" 
                  className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  src="https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-1.png&w=640&q=75" 
                />
              </div>
              <div className="flex items-center flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 text-[#020202]">
                  Linternas solares
                </h3>
                <p className="text-lg md:text-xl mb-4 text-center transition-colors duration-300 text-black/80">
                  Soluciones portátiles con energía solar para iluminar cualquier espacio
                </p>
                <button className="relative flex items-center justify-start rounded-full h-12 group">
                  <div className="absolute left-0 flex items-center justify-center w-12 h-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Botón de navegación derecha, solo visible en móvil */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full shadow-lg md:hidden"
            aria-label="Desplazar carrusel a la derecha"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productos;

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import { useLanguage } from './LenguajeContext'; 

const Productos = () => {
  const [showModal, setShowModal] = useState(false);  
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const [miniCards, setMiniCards] = useState([]);  

  const carouselRef = useRef(null);

  useEffect(() => {
    // Inicializa AOS cuando el componente se monta
    AOS.init({
      duration: 1200, // Duración de las animaciones en milisegundos
      once: true, // La animación solo se ejecutará una vez
      easing: 'ease-out', // Efecto de transición
    });
  }, []);

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

  const handleOpenModal = (product) => {

    setSelectedProduct(product);

    // Dependiendo del producto seleccionado, definir qué productos mostrar en las mini cards

    if (product.title === 'Sistemas solares casero') {

      setMiniCards([

        { title: 'D10', description: 'Aliando su hogar con solar', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd10%2Fd10-1-1.png&w=256&q=75' },

        { title: 'D100', description: 'Actualizacion a una vida mas brillante', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd100%2Fd100-1.png&w=256&q=75' },

        { title: 'D200', description: 'Actualizacion a una vida mas brillante', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd200%2Fd200-1.png&w=256&q=75' },

        { title: 'X100Pro', description: 'Creciendo con sus aspiraciones', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx1000%2Fx1000-1.png&w=256&q=75' },

        { title: 'X200Pro', description: 'Una central solar', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx2000%2Fx2000-1.png&w=256&q=75' },

        { title: 'X300Pro', description: 'Una central solar', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx3000%2Fx3000-1.png&w=256&q=75' },

      ]);

    } else if (product.title === 'Inversores solares') {

      setMiniCards([

        { title: 'iMax10 Pro', description: 'Disfrijo la libertad de vida', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fimax10%2Fimax10-1.jpg&w=640&q=75' },

      ]);

    } else if (product.title === 'Áticos') {
 setMiniCards([

        { title: 'V240S-p', description: 'Producto no disponible por razones gubernamentales', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fv240s-p%2Fv240s-p-1-1.png&w=1080&q=75' },

        { title: 'V320S-p', description: 'Producto no disponible por razones gubernamentales', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fv320s-p%2Fv320s-p-1-1.png&w=1080&q=75' },

        { title: 'SF40', description: 'Disfrute de un aire frsco relajante en cualquier momento', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fsf40%2Fsf40-1.png&w=1080&q=75' },

        { title: 'SF50', description: 'Confort alimentado por el sol', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fsf50%2Fsf50-1.png&w=1080&q=75' },

      ]);

    } else {

      setMiniCards([

        { title: 'A2', description: 'Linterna de todos los dias', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fa2%2Fa2-1.jpg&w=640&q=75' },

        { title: 'S3', description: 'Aprender la luz', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs3%2Fs3-1.jpg&w=640&q=75' },

        { title: 'S30', description: 'Linterna familiar', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs30%2Fs30-1.jpg&w=640&q=75' },

        { title: 'S200', description: 'Siempre mantente conectado, de noche o de dia', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs200%2Fs200-1.png&w=640&q=75' },

        { title: 'S610', description: 'Nunca pagues por la carga movil y la iluminacion de nuevo', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs610%2Fs610-2.png&w=640&q=75' },

        { title: 'T200', description: 'Su compañero confiable en casa y al aire libre', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft200%2Ft200-1.png&w=640&q=75' },

        { title: 'T200R', description: 'Luz y entretenimiento en el GO', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft200r%2Ft200r-1.png&w=640&q=75' },

        { title: 'T500R', description: 'Tu linterna de seguridad', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft500r%2Ft500r-1.jpg&w=640&q=75' },

      ]);

    }
    setShowModal(true);

  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setMiniCards([]);
  };

   const products = [
    {
      title: 'Sistemas solares casero',
      description: 'Potencia solar flexible para un mañana más brillante',
      image: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx2000%2Fx2000-1.png&w=640&q=75',
    },
    {
      title: 'Inversores solares',
      description: 'Poder sin esfuerzo para una vida interrumpida',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-3.png&w=640&q=75',
    },
    {
      title: 'Áticos',
      description: 'Versatil, Pay-As-You-Go Electrodomesticos',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-4.png&w=640&q=75',
    },
    {
      title: 'Linternas solares',
      description: 'Poder portatil pionante en marcha',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-1.png&w=640&q=75',
    },
  ];
  return (
    <section id="products" className="productos-section py-6">
      <div className="container mx-auto px-1">
        <div className="max-w-[1280px] mx-auto">
          {/* Contenedor centrado */}
          <div className="text-center w-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-black" data-aos="fade-up">
              PRODUCTOS
            </h2>
            <p className="mt-4 text-xl text-black" data-aos="fade-up" data-aos-delay="100">
              Empoderar soluciones para la Transformación de la vida
            </p>
          </div>
        </div>
  
        <div className="mt-8 relative">
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full shadow-lg md:hidden"
            aria-label="Desplazar carrusel a la izquierda"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
  
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x scroll-smooth pb-4 justify-center"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-md overflow-hidden flex flex-col h-[440px] w-[320px] transition-all duration-500 hover:bg-white hover:shadow-lg bg-white shadow-lg p-4 px-6 transform hover:scale-105 hover:translate-y-[-4px]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-center h-[220px] mb-4">
                  <img
                    alt={product.title}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                    src={product.image}
                  />
                </div>
                <div className="flex items-center flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#020202] whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl mb-4 text-center text-black/80">
                    {product.description}
                  </p>
  
                  {/* Condición para mostrar la descripción de no disponibilidad */}
                  {(product.title === "v240s-p" || product.title === "v230s-p") && (
                    <p className="text-sm text-red-500 font-semibold mt-2">
                      No se encuentra disponible por razones gubernamentales.
                    </p>
                  )}
  
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 group mt-auto"
                    data-aos="fade-up"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full shadow-lg md:hidden"
            aria-label="Desplazar carrusel a la derecha"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
  
      {/* Modal (Mini Página) */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-gray-300 to-gray-600 p-6 rounded-md shadow-xl max-w-4xl w-full relative overflow-hidden">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-white">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-semibold text-[#020202]" data-aos="fade-up">{selectedProduct.title}</h3>
            </div>
            <hr className="mb-6" />
            <div className="flex gap-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-h-[70vh]">
              {miniCards.map((miniCard, index) => (
                <div key={index} className="cursor-pointer rounded-md overflow-hidden flex flex-col w-full max-w-[300px] transition-all duration-500 hover:bg-white hover:shadow-lg bg-white shadow-lg p-6 transform hover:scale-105 hover:translate-y-[-4px]" data-aos="zoom-in-up">
                  <div className="flex items-center justify-center h-[200px] mb-4">
                    <img src={miniCard.imageLink} alt={miniCard.title} className="object-contain max-w-full max-h-full" />
                  </div>
                  <div className="flex items-center flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#020202] mb-2">{miniCard.title}</h3>
                    <p className="text-sm text-center text-black/80 mb-4">{miniCard.description}</p>
                  </div>
                  <div className="flex justify-center items-center mt-auto">
                    <button className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-black w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>  
                </div>
              ))}
            </div>
            {/* Botón "Ver todos los productos" con más padding al final */}
            <div className="flex justify-center mt-6 pb-8">
              <a
                href="https://shop-ecomerse.vercel.app/"
                className="relative text-gray-800 text-lg font-semibold py-3 px-8 rounded-md group"
              >
                Ver todos los productos
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
  
};

export default Productos;

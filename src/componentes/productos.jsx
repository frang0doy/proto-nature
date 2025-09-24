import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LenguajeContext';

const Productos = () => {
  const [showModal, setShowModal] = useState(false);  
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const [miniCards, setMiniCards] = useState([]);  
  const carouselRef = useRef(null);
  
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
    });
  }, []);
  
  const handleOpenModal = (product) => {
    setSelectedProduct(product);

    if (product.title === 'Sistemas solares casero' || product.title === 'Sistema solar casero') {
      setMiniCards([
        { title: 'D10', description: language === 'es' ? 'Aliando su hogar con solar' : 'Partnering your home with solar', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd10%2Fd10-1-1.png&w=256&q=75' },
        { title: 'D100', description: language === 'es' ? 'Actualización a una vida más brillante' : 'Upgrade to a brighter life', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd100%2Fd100-1.png&w=256&q=75' },
        { title: 'D200', description: language === 'es' ? 'Actualización a una vida más brillante' : 'Upgrade to a brighter life', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fd200%2Fd200-1.png&w=256&q=75' },
        { title: 'X100Pro', description: language === 'es' ? 'Creciendo con sus aspiraciones' : 'Growing with your aspirations', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx1000%2Fx1000-1.png&w=256&q=75' },
        { title: 'X200Pro', description: language === 'es' ? 'Una central solar' : 'A solar powerhouse', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx2000%2Fx2000-1.png&w=256&q=75' },
        { title: 'X300Pro', description: language === 'es' ? 'Una central solar' : 'A solar powerhouse', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx3000%2Fx3000-1.png&w=256&q=75' },
      ]);
    } else if (product.title === 'Inversores solares') {
      setMiniCards([
        { title: 'iMax10 Pro', description: language === 'es' ? 'Disfruta la libertad de vida' : 'Enjoy the freedom of life', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fimax10%2Fimax10-1.jpg&w=640&q=75' },
      ]);
    } else if (product.title === 'Áticos') {
      setMiniCards([
        { title: 'V240S-p', description: language === 'es' ? 'Producto no disponible por razones gubernamentales' : 'Product unavailable for governmental reasons', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fv240s-p%2Fv240s-p-1-1.png&w=1080&q=75' },
        { title: 'V320S-p', description: language === 'es' ? 'Producto no disponible por razones gubernamentales' : 'Product unavailable for governmental reasons', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fv320s-p%2Fv320s-p-1-1.png&w=1080&q=75' },
        { title: 'SF40', description: language === 'es' ? 'Disfruta de un aire fresco y relajante en cualquier momento' : 'Enjoy a fresh, relaxing air anytime', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fsf40%2Fsf40-1.png&w=1080&q=75' },
        { title: 'SF50', description: language === 'es' ? 'Confort alimentado por el sol' : 'Solar-powered comfort', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fsf50%2Fsf50-1.png&w=1080&q=75' },
      ]);
    } else if (product.title === 'Linteras Solares' || product.title === 'Linternas Solares') {
      setMiniCards([
        { title: 'A2', description: language === 'es' ? 'Linterna de todos los días' : 'Everyday flashlight', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fa2%2Fa2-1.jpg&w=640&q=75' },
        { title: 'S3', description: language === 'es' ? 'Aprender la luz' : 'Learning light', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs3%2Fs3-1.jpg&w=640&q=75' },
        { title: 'S30', description: language === 'es' ? 'Linterna familiar' : 'Family lantern', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs30%2Fs30-1.jpg&w=640&q=75' },
        { title: 'S200', description: language === 'es' ? 'Siempre mantente conectado, de noche o de día' : 'Always stay connected, day or night', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs200%2Fs200-1.png&w=640&q=75' },
        { title: 'S610', description: language === 'es' ? 'Nunca pagues por la carga móvil y la iluminación de nuevo' : 'Never pay for mobile charging or lighting again', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fs610%2Fs610-2.png&w=640&q=75' },
        { title: 'T200', description: language === 'es' ? 'Su compañero confiable en casa y al aire libre' : 'Your reliable companion at home and outdoors', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft200%2Ft200-1.png&w=640&q=75' },
        { title: 'T200R', description: language === 'es' ? 'Luz y entretenimiento en el GO' : 'Light and entertainment on the go', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft200r%2Ft200r-1.png&w=640&q=75' },
        { title: 'T500R', description: language === 'es' ? 'Tu linterna de seguridad' : 'Your safety lantern', imageLink: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Ft500r%2Ft500r-1.jpg&w=640&q=75' },
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
      title: language === 'es' ? 'Sistema solar casero' : 'Home Solar Systems',
      description: language === 'es' ? 'Potencia solar flexible para un mañana más brillante' : 'Flexible solar power for a brighter tomorrow',
      image: 'https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fproducts%2Fx2000%2Fx2000-1.png&w=640&q=75',
    },
    {
      title: 'Inversores solares',
      description: language === 'es' ? 'Tecnología inteligente para energía confiable' : 'Smart technology for reliable energy',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-3.png&w=640&q=75',
    },
    {
      title: 'Áticos',
      description: language === 'es' ? 'Ventiladores solares de última generación' : 'Next-generation solar fans',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-4.png&w=640&q=75',
    },
    {
      title: language === 'es' ? 'Linternas Solares' : 'Solar Lanterns',
      description: language === 'es' ? 'Ilumina cada rincón con energía limpia' : 'Light up every corner with clean energy',
      image: 'https://www.dlight.com/_next/image?url=%2Fimages%2Fproduct-1.png&w=640&q=75',
    },
  ];

  return (
    <section id="products" className="productos-section py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center w-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold text-black" data-aos="fade-up">
              {language === 'es' ? 'PRODUCTOS' : 'PRODUCTS'}
            </h2>
            <p className="mt-4 text-xl text-black" data-aos="fade-up" data-aos-delay="100">
              {language === 'es' ? 'Empoderar soluciones para la transformación de la vida' : 'Empowering solutions for life transformation'}
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div ref={carouselRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 justify-items-center px-4 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-3xl overflow-hidden flex flex-col h-[480px] w-full max-w-[300px] transition-all duration-500 hover:bg-white hover:shadow-2xl bg-white shadow-2xl p-6 transform hover:scale-105 hover:translate-y-[-8px] border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center justify-center h-[200px] mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <img
                    alt={product.title}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
                    src={product.image}
                  />
                </div>
                <div className="flex items-center flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-base mb-4 text-center text-gray-600 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {(product.title === "v240s-p" || product.title === "v230s-p") && (
                    <p className="text-sm text-red-500 font-semibold mt-2 mb-4">
                      {language === 'es' ? 'No se encuentra disponible por razones gubernamentales.' : 'Not available for governmental reasons.'}
                    </p>
                  )}

                  <button
                    onClick={() => handleOpenModal(product)}
                    className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group mt-auto hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-aos="fade-up"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-white w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-6xl w-full relative overflow-hidden mx-4">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors duration-300">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-up">
                {selectedProduct.title}
              </h3>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[70vh] overflow-y-auto pr-4">
              {miniCards.map((miniCard, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-2xl overflow-hidden flex flex-col w-full max-w-[320px] transition-all duration-500 hover:bg-gray-50 hover:shadow-xl bg-white shadow-lg p-6 transform hover:scale-105 hover:translate-y-[-4px] border border-gray-100"
                  data-aos="zoom-in-up"
                >
                  <div className="flex items-center justify-center h-[180px] mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                    <img
                      src={miniCard.imageLink}
                      alt={miniCard.title}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div className="flex items-center flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {miniCard.title}
                    </h3>
                    <p className="text-sm text-center text-gray-600 mb-4 leading-relaxed">
                      {miniCard.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 pb-4">
              <a
                href="https://shop-ecomerse-lfen.vercel.app/"
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-full group hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {language === 'es' ? 'Ver todos los productos' : 'View all products'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Productos;


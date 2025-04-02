import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Longi = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const headerHeight = document.querySelector("header")?.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;

    document.documentElement.classList.add('force-update-header');
    setTimeout(() => {
      document.documentElement.classList.remove('force-update-header');
    }, 50);

    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, [location]);

  const handleGoHome = () => {
    navigate("/");  
    window.location.reload();  
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${location.pathname === '/' ? 'bg-transparent' : 'bg-black'} shadow-md`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6 px-6">
          <Link to="" className="flex-shrink-0 ml-0">
            <img src="/logo512.png" alt="Logo" className="w-32 h-auto" />
          </Link>
          <button onClick={toggleLanguage} className="text-white hover:text-purple-500">
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="py-2 pb-0 mt-4">
        <div className="max-w-6xl mx-auto">
          <button onClick={handleGoHome} className="text-black hover:underline">
            {language === 'es' ? 'Inicio' : 'Home'}
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-700">LONGi Solar</span>
        </div>
      </nav>

      {/* Parallax Section */}
      <section
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://static.longi.com/industry_solution_748d38c4ea.jpg')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-3xl sm:text-2xl font-bold text-center">
            {language === 'es' ? 'Paneles de alta eficiencia solar' : 'high-efficiency solar panels'}
          </h1>
          <div className="absolute bottom-8 flex space-x-4">
            <a href="https://www.longi-solar.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-400">
                {language === 'es' ? 'Ver más' : 'Learn More'}
              </button>
            </a>
            <a href="https://shop-nature.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-400 text-black px-6 py-3 rounded-md hover:bg-white">
                {language === 'es' ? 'Comprar' : 'Buy'}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About LONGi Section */}
      <section className="p-12 bg-gray-50" id="nosotros" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">{language === 'es' ? 'Sobre LONGi' : 'About LONGi'}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {language === 'es' ? 'LONGi Solar es una de las empresas líder especializada en la fabricación de módulos fotovoltaicos de alto rendimiento.' : 'LONGi Solar is one of the leading companies specializing in the manufacture of high-performance photovoltaic modules.'}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white" id="productos">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8" data-aos="fade-up">
            {language === 'es' ? 'Productos Destacados' : 'Featured Products'}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Producto 1 */}
            <div
              className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center max-w-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://static.longi.com/X10_12e3b6df8d_5c1487f002.jpg"
                alt="Solar Panel"
                className="w-64 h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold">{language === 'es' ? 'Módulo Solar de Alta Eficiencia' : 'High Efficiency Solar Module'}</h3>
              <p className="text-gray-600 mt-2">
                {language === 'es' ? 'Con un diseño optimizado, nuestros módulos solares son perfectos para proyectos residenciales y comerciales.' : 'With optimized design, our solar modules are perfect for residential and commercial projects.'}
              </p>
            </div>

            {/* Producto 2 */}
            <div
              className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center max-w-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://static.longi.com/Explorer_06_2c0e9cf07e.png"
                alt="Energy Storage"
                className="w-64 h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold">{language === 'es' ? 'Sistema de Almacenamiento Solar' : 'Solar Storage System'}</h3>
              <p className="text-gray-600 mt-2">
                {language === 'es' ? 'Soluciones avanzadas para almacenar y gestionar la energía solar de manera eficiente.' : 'Advanced solutions for storing and managing solar energy efficiently.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer id="contacto" />
    </div>
  );
};

export default Longi;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hoppecke = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    window.scrollTo(0, 0);
    const headerHeight = document.querySelector("header")?.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;

    document.documentElement.classList.add('force-update-header');
    setTimeout(() => {
      document.documentElement.classList.remove('force-update-header');
    }, 50);

    // Escuchar el scroll para cambiar el header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleGoHome = () => {
    navigate("/");  
    window.location.reload();  
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header mejorado con efecto de scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6 px-6">
          <Link to="" className="flex-shrink-0 ml-0 group">
            <img 
              src="/logo512.png" 
              alt="Logo" 
              className="w-32 h-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
          <button 
            onClick={toggleLanguage} 
            className="text-white hover:text-purple-400 transition-all duration-300 px-4 py-2 rounded-full border border-white/30 hover:border-purple-400 hover:bg-white/10"
          >
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      {/* Breadcrumb mejorado */}
      <nav className="bg-gradient-to-r from-gray-200 via-gray-300 to-white py-4 mt-20 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={handleGoHome}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              {language === 'es' ? 'Inicio' : 'Home'}
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-purple-600 font-semibold">Hoppecke</span>
          </div>
        </div>
      </nav>

      {/* Hero Section mejorado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/slider/New_Slider_Standard/HOPPECKE_Datacenter.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto" data-aos="fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            HOPPECKE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'Líder mundial en sistemas de almacenamiento de energía y baterías avanzadas para aplicaciones industriales y comerciales.'
              : 'Global leader in energy storage systems and advanced batteries for industrial and commercial applications.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.hoppecke.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {language === 'es' ? 'Conoce más' : 'Learn More'}
            </a>
            <a href="https://shop-nature.vercel.app" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              {language === 'es' ? 'Comprar ahora' : 'Buy Now'}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>


      {/* About Hoppecke Section mejorada */}
      <section className="py-20 bg-white" id="nosotros">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Sobre Hoppecke' : 'About Hoppecke'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="text-center" data-aos="fade-up">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {language === 'es' 
                ? 'Hoppecke es un líder global especializado en sistemas de almacenamiento de energía y baterías avanzadas. Con décadas de experiencia, proporcionamos soluciones innovadoras para aplicaciones industriales, comerciales y residenciales.' 
                : 'Hoppecke is a global leader specializing in energy storage systems and advanced batteries. With decades of experience, we provide innovative solutions for industrial, commercial, and residential applications.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Section mejorada */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="productos">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Nuestros Productos' : 'Our Products'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Producto 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-100" data-aos="zoom-in">
              <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/trak_uplift_save-_image_2_home.png" alt="Battery" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Batería de Plomo Ácido' : 'Lead-Acid Battery'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{language === 'es' ? 'Soluciones avanzadas para almacenamiento de energía industrial.' : 'Advanced solutions for industrial energy storage.'}</p>
            </div>

            {/* Producto 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-100" data-aos="zoom-in">
              <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/grid_power_vm_group_image_1_home.png" alt="Battery" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Batería para Energía Solar' : 'Battery for Solar Energy'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{language === 'es' ? 'Integración de energía solar con almacenamiento eficiente.' : 'Solar energy integration with efficient storage.'}</p>
            </div>

            {/* Producto 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-100" data-aos="zoom-in">
              <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/grid-xtreme-vr-green-series_group_image_1_home.png" alt="Battery" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'es' ? 'Sistema de Almacenamiento' : 'Energy Storage System'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{language === 'es' ? 'Soluciones completas para optimizar el uso de energía renovable.' : 'Complete solutions to optimize renewable energy use.'}</p>
            </div>

            {/* Producto 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-100" data-aos="zoom-in">
              <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <img src="/grid.jpg" alt="Sistema Off the Grid" className="w-20 h-20 object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'es' ? 'Sistema Autónomo' : 'Off-Grid System'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'es'
                  ? 'Energía confiable en zonas rurales sin conexión eléctrica.'
                  : 'Reliable energy in rural areas without grid connection.'}
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

export default Hoppecke;

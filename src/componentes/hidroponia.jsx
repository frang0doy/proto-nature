import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer';
import { useLanguage } from './LenguajeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hidroponia = () => {
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

    // Asegura que el contenido no se solape debajo del header fijo
    const headerHeight = document.querySelector("header")?.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;

    // Forzamos una actualización de los estilos del header al cambiar de ruta
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
          {/* Logo con animación */}
          <Link to="" className="flex-shrink-0 ml-0 group">
            <img 
              src="/logo512.png" 
              alt="Logo" 
              className="w-32 h-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Enlaces de navegación mejorados */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#nosotros" className="relative text-sm font-semibold text-white group transition-all duration-300 hover:text-purple-400">
              {language === 'es' ? 'NOSOTROS' : 'ABOUT US'}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#video" className="relative text-sm font-semibold text-white group transition-all duration-300 hover:text-purple-400">
              {language === 'es' ? 'VIDEO' : 'VIDEO'}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#contacto" className="relative text-sm font-semibold text-white group transition-all duration-300 hover:text-purple-400">
              {language === 'es' ? 'CONTACTO' : 'CONTACT'}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </a>
          </nav>

          {/* Botón de idioma mejorado */}
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
            <span className="text-purple-600 font-semibold">Hidroponía</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Solo imagen sin texto */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://infonegocios.info/content/images/2022/07/21/189303/conversions/pablo-buzzo-menu-creativo-4-nqn-medium-size.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Sección Nosotros mejorada */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'es' ? 'Sobre Hidroponía' : 'About Hydroponics'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="text-center" data-aos="fade-up">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {language === 'es' 
                  ? 'La hidroponía es una técnica innovadora de cultivo que permite el crecimiento de plantas sin necesidad de suelo, utilizando soluciones minerales en agua. Esta práctica no solo optimiza el uso del espacio y el agua, sino que también reduce el uso de pesticidas, ofreciendo alimentos más limpios y saludables. Es ideal para ambientes urbanos o lugares con suelos poco fértiles, promoviendo una agricultura sostenible y eficiente.'
                  : 'Hydroponics is an innovative cultivation method that allows plants to grow without soil, using nutrient-rich water solutions. This technique optimizes space and water usage while reducing the need for pesticides, resulting in cleaner, healthier food. It is ideal for urban environments or areas with poor soil, promoting sustainable and efficient agriculture.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Sección Video */}
        <section id="video" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'es' ? 'Video Demostrativo' : 'Demo Video'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="w-full max-w-5xl mx-auto" data-aos="fade-up">
              <div className="w-full aspect-video shadow-2xl overflow-hidden rounded-2xl">
                <video 
                  src="/babylonvideo.mp4" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contacto */}
        <section id="contacto">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Hidroponia;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nosotros from './nosotros';
import Productos from './productos';
import Footer from './footer';
import { useLanguage } from './LenguajeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dlight = () => {
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

  const navLinks = {

    nosotros: language === 'es' ? 'NOSOTROS' : 'ABOUT US',
    productos: language === 'es' ? 'PRODUCTOS' : 'PRODUCTS',
    
    contacto: language === 'es' ? 'CONTACTO' : 'CONTACT',
  };

  // Función para manejar la navegación y recarga de la página
  const handleGoHome = () => {
    navigate("/");  // Redirige a la página principal
    window.location.reload();  // Recarga la página después de la navegación
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
              {navLinks.nosotros}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#productos" className="relative text-sm font-semibold text-white group transition-all duration-300 hover:text-purple-400">
              {navLinks.productos}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#contacto" className="relative text-sm font-semibold text-white group transition-all duration-300 hover:text-purple-400">
              {navLinks.contacto}
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
            <span className="text-purple-600 font-semibold">Dlight</span>
          </div>
        </div>
      </nav>

      {/* Hero Section mejorado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://earthshotprize.org/wp-content/uploads/2024/09/DLight-Support-Hero-1920x1080_0000_IMG_3773.jpg-1024x576.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto" data-aos="fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DLight
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'Revolucionando el acceso a la energía solar con soluciones innovadoras y sostenibles para comunidades de todo el mundo.'
              : 'Revolutionizing solar energy access with innovative and sustainable solutions for communities worldwide.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#nosotros" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {language === 'es' ? 'Conoce más' : 'Learn More'}
            </a>
            <a href="https://shop-ecomerse-lfen.vercel.app/" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
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

      <main className="flex-grow">
        {/* Sección Nosotros mejorada */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'es' ? 'Sobre DLight' : 'About DLight'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <Nosotros />
          </div>
        </section>
        
        {/* Sección Productos mejorada */}
        <section id="productos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'es' ? 'Nuestros Productos' : 'Our Products'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <Productos />
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

export default Dlight;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Nosotros from './nosotros';
import Soluciones from './soluciones';
import Productos from './productos';
import Footer from './footer';
import { useLanguage } from './LenguajeContext';
const Dlight = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage(); // Obtén el idioma y la función para cambiarlo

  useEffect(() => {
    // Asegura que la página se desplace hacia la parte superior al abrirse
    window.scrollTo(0, 0);

    // Esto asegura que el contenido no se solape debajo del header fijo
    const headerHeight = document.querySelector("header")?.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`; // Ajustamos el padding para evitar el solapamiento
  }, []);

  // Textos del header según el idioma
  const navLinks = {
    productos: language === 'es' ? 'Productos' : 'Products',
    nosotros: language === 'es' ? 'Nosotros' : 'About Us',
    soluciones: language === 'es' ? 'Soluciones' : 'Solutions',
    contacto: language === 'es' ? 'Contacto' : 'Contact',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header personalizado dentro del componente Dlight */}
      <header className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/">
            <img src="/logo512.png" alt="Logo" className="w-28 h-auto" />
          </Link>

          {/* Enlaces de navegación */}
          <nav className="flex space-x-6">
            <Link to="/productos" className="text-white relative group">
              {navLinks.productos}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/nosotros" className="text-white relative group">
              {navLinks.nosotros}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/soluciones" className="text-white relative group">
              {navLinks.soluciones}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contacto" className="text-white relative group">
              {navLinks.contacto}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Icono de cambio de idioma */}
          <button onClick={toggleLanguage} className="text-white hover:text-purple-500">
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      {/* Breadcrumb debajo del Header con fondo gradiente */}
      <nav className="bg-gradient-to-r from-gray-300 via-gray-400 to-white py-2 pb-0 overflow-hidden mt-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-black hover:underline">{language === 'es' ? 'Inicio' : 'Home'}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Dlight</span>
        </div>
      </nav>

      <main className="flex-grow">
        <section id="nosotros">
          <Nosotros />
        </section>
        <section id="soluciones">
          <Soluciones />
        </section>
        <section id="productos">
          <Productos />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dlight;

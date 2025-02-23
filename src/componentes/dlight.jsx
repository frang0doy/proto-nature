import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Agregamos useNavigate
import Nosotros from './nosotros';
import Soluciones from './soluciones';
import Productos from './productos';
import Footer from './footer';
import { useLanguage } from './LenguajeContext';

const Dlight = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Usamos el hook useNavigate
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Asegura que el contenido no se solape debajo del header fijo
    const headerHeight = document.querySelector("header")?.offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;

    // Forzamos una actualización de los estilos del header al cambiar de ruta
    document.documentElement.classList.add('force-update-header');
    setTimeout(() => {
      document.documentElement.classList.remove('force-update-header');
    }, 50); // Remueve la clase tras 50ms para que el navegador la recalcule
  }, [location]);

  const navLinks = {
    productos: language === 'es' ? 'Productos' : 'Products',
    nosotros: language === 'es' ? 'Nosotros' : 'About Us',
    soluciones: language === 'es' ? 'Soluciones' : 'Solutions',
    contacto: language === 'es' ? 'Contacto' : 'Contact',
  };

  // Función para manejar la navegación y recarga de la página
  const handleGoHome = () => {
    navigate("/");  // Redirige a la página principal
    window.location.reload();  // Recarga la página después de la navegación
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header personalizado dentro del componente Dlight */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${location.pathname === '/' ? 'bg-transparent' : 'bg-black'} shadow-md`}>
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
          {/* Usamos un botón que dispara handleGoHome para hacer redirección y recarga */}
          <button
            onClick={handleGoHome}
            className="text-black hover:underline"
          >
            {language === 'es' ? 'Inicio' : 'Home'}
          </button>
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

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from './header';

import Nosotros from './nosotros';
import Soluciones from './soluciones';
import Productos from './productos';
import Footer from './footer';

const Dlight = () => {
  useEffect(() => {
    // Asegura que la página se desplace hacia la parte superior al abrirse
    window.scrollTo(0, 0);

    // Esto asegura que el contenido no se solape debajo del header fijo
    const headerHeight = document.querySelector("header").offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
  }, []);  // El efecto se ejecuta solo una vez cuando se carga el componente

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header con fondo negro fijo */}
      <Header />
      
      {/* Breadcrumb debajo del Header con fondo gradiente */}
      <nav className="bg-gradient-to-r from-gray-300 via-gray-400 to-white py-2 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-black hover:underline">Inicio</Link>
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

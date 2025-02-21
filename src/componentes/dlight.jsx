import React from "react";
import { Link } from "react-router-dom";
import Header from './header';

import Nosotros from './nosotros';
import Soluciones from './soluciones';
import Productos from './productos';
import Footer from './footer';

const Dlight = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Breadcrumb debajo del Header con margen superior */}
      <nav className="bg-gray-300 p-4 text-sm mt-20">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="text-blue-500 hover:underline">Inicio</Link>
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

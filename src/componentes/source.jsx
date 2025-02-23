import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 

const Source = () => {
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
  }, [location]);

  const navLinks = {
    productos: language === 'es' ? 'PRODUCTOS' : 'PRODUCTS',
    contacto: language === 'es' ? 'CONTACTO' : 'CONTACT',
  };

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
          <nav className="flex space-x-4">
            <a href="#productos" className="relative text-sm font-semibold text-white group">{navLinks.productos}</a>
            <a href="#nosotros" className="relative text-sm font-semibold text-white group">{navLinks.nosotros}</a>
            <a href="#soluciones" className="relative text-sm font-semibold text-white group">{navLinks.soluciones}</a>
            <a href="#contacto" className="relative text-sm font-semibold text-white group">{navLinks.contacto}</a>
          </nav>
          <button onClick={toggleLanguage} className="text-white hover:text-purple-500">
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-gradient-to-r from-gray-300 via-gray-400 to-white py-2 pb-0 overflow-hidden mt-4">
        <div className="max-w-6xl mx-auto">
          <button onClick={handleGoHome} className="text-black hover:underline">
            {language === 'es' ? 'Inicio' : 'Home'}
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-700">SOURCE Global</span>
        </div>
      </nav>

      {/* Parallax Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://source.co/cdn/shop/files/SOURCE_commercial_field.png?v=1717197556&width=1000')" }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-bold text-center">Tecnología de Agua Sostenible</h1>
          <div className="absolute bottom-8 flex space-x-4">
            <a href="https://source.co" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-400">
                Ver más
              </button>
            </a>
            <a href="https://shop-nature.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-400 text-black px-6 py-3 rounded-md hover:bg-white">
                Comprar
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About SOURCE Section */}
      <section className="p-12 bg-gray-100" id="nosotros">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">{language === 'es' ? '¿Quiénes somos?' : 'About Us'}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {language === 'es' ? 'SOURCE Global es una empresa líder en soluciones de agua sostenible, utilizando energía solar para producir agua potable a partir del aire.' : 'SOURCE Global is a leading company in sustainable water solutions, using solar energy to produce drinking water from air.'}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white" id="productos">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{language === 'es' ? 'Productos' : 'Products'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Producto 1 */}
            <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src="https://source.co/cdn/shop/files/Roxi_Hydropanel_xray_1.jpg?v=1729116590&width=1920" alt="Hydropanel" className="w-64 h-64 object-cover rounded-md mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"/>
              <h3 className="text-2xl font-semibold text-gray-800">{language === 'es' ? 'Hydropanel®' : 'Hydropanel®'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Genera agua potable a partir del aire utilizando energía solar.' : 'Generates drinking water from the air using solar energy.'}</p>
            </div>
            {/* Producto 2 */}
            <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src="https://source.co/cdn/shop/files/SOURCE_Residential_Panel.jpg?v=1719538523&width=1000" alt="Hydropanel" className="w-64 h-64 object-cover rounded-md mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"/>
              <h3 className="text-2xl font-semibold text-gray-800">{language === 'es' ? 'Hydropanel® Solar' : 'Hydropanel® Solar'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Integración con soluciones solares para optimizar el uso de energía.' : 'Integrated with solar solutions to optimize energy usage.'}</p>
            </div>
            {/* Producto 3 */}
            <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src="https://www.businessnews.com.lb/cms/Portals/2/Business/2015/source-roundup-photo.jpg" alt="Hydropanel" className="w-64 h-64 object-cover rounded-md mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"/>
              <h3 className="text-2xl font-semibold text-gray-800">{language === 'es' ? 'Hydropanel® para Comunidades' : 'Hydropanel® for Communities'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Soluciones personalizadas para comunidades y organizaciones.' : 'Custom solutions for communities and organizations.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer id="contacto" />
    </div>
  );
};

export default Source;

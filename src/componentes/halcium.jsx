import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 

const Halcium = () => {
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
          <span className="text-gray-700">Halcium</span>
        </div>
      </nav>

      {/* Parallax Section */}
      <section
  className="relative w-full h-[500px] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://static.wixstatic.com/media/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg/v1/fill/w_1903,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg')",
  }}
>
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
    <h1 className="text-white text-3xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center leading-tight">
      {language === "es" ? "Energia eolica" : "Wind energy"}
    </h1>
    <div className="absolute bottom-8 flex space-x-4">
      <a
        href="https://www.halcium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-400">
          {language === "es" ? "Ver más" : "See more"}
        </button>
      </a>
      <a
        href="https://shop-halcium.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gray-400 text-black px-6 py-3 rounded-md hover:bg-white">
          {language === "es" ? "Comprar" : "Shop"}
        </button>
      </a>
    </div>
  </div>
</section>

      {/* About Halcium Section */}
      <section className="p-12 bg-gray-50" id="nosotros">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">{language === 'es' ? 'Sobre Halcium' : 'About Halcium'}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {language === 'es' ? 'Halcium desarrollo la primer turbina eolica fija para generar energia.' : 'Halcium developed the first fixed wind turbine to generate energy'}
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-white" id="cards">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* Título de la sección */}
    <h4 className="text-3xl font-semibold text-gray-800 mb-8">{language === 'es' ? 'Lanzamiento 2027' : 'Launch 2027'}</h4>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
        <img src="https://static.wixstatic.com/media/8a6f9d_070d07515bcc445aabc5c7139cfdf1a6~mv2.jpg/v1/crop/x_24,y_0,w_3276,h_1500/fill/w_755,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Color-Lineup.jpg" alt="Energy" className="w-64 h-64 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-semibold">{language === 'es' ? 'Energía' : 'Energy'}</h3>
        <p className="text-gray-600 mt-2">
          {language === 'es' ? 'Implementación de soluciones solares para hogares y empresas.' : 'Implementing solar solutions for homes and businesses.'}
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
        <img src="https://static.wixstatic.com/media/8a6f9d_2d6d297f42ba4f9dad2d6f25cd7158d1~mv2.png/v1/fill/w_653,h_631,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/How%20to%20use.png" alt="Energy Storage" className="w-64 h-64 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-semibold">{language === 'es' ? 'Almacenamiento de Energía' : 'Energy Storage'}</h3>
        <p className="text-gray-600 mt-2">
          {language === 'es' ? 'Soluciones avanzadas para almacenar energía de forma eficiente.' : 'Advanced solutions for efficiently storing energy.'}
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
        <img src="https://static.wixstatic.com/media/8a6f9d_88ce7d63d27645cda67430745af466dc~mv2.png/v1/crop/x_255,y_0,w_1363,h_1274/fill/w_436,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Air-Inflow-1.png" alt="Energy Solutions" className="w-64 h-64 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-semibold">{language === 'es' ? 'Soluciones Energéticas' : 'Energy Solutions'}</h3>
        <p className="text-gray-600 mt-2">
          {language === 'es' ? 'Soluciones energéticas personalizadas para diversos sectores.' : 'Customized energy solutions for various sectors.'}
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Halcium;

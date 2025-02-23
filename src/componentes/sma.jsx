import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 

const Sma = () => {
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
          <Link to="/" className="flex-shrink-0 ml-0">
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
          <span className="text-gray-700">SMA</span>
        </div>
      </nav>

      {/* Parallax Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.sma.de/fileadmin/_processed_/2/3/csm_sma-header-company_ef0d339093.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-extrabold text-center">
            Energía Solar para un Futuro Sostenible
          </h1>
          <div className="absolute bottom-8 flex space-x-4">
            <a href="https://www.sma.de/es/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-400">
                Conoce más
              </button>
            </a>
            <a href="https://shop-nature.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-400 text-black px-6 py-3 rounded-md hover:bg-white">
                Compra ahora
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About SMA Section */}
      <section className="p-12 bg-gray-50" id="nosotros">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">{language === 'es' ? 'Sobre SMA' : 'About SMA'}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {language === 'es' ? 'SMA es uno de los líderes mundiales en la fabricación de inversores solares, ofreciendo soluciones para optimizar la energía renovable.' : 'SMA is one of the global leaders in manufacturing solar inverters, offering solutions to optimize renewable energy.'}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white" id="productos">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">{language === 'es' ? 'Productos Destacados' : 'Featured Products'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Producto 1 */}
            <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
              <img src="https://cdn.sma.de/fileadmin/_processed_/8/a/csm_solar-wechselrichter-aus_bb8aee40ed.webp" alt="Inversor SMA" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">{language === 'es' ? 'Inversores Fotovoltaicos' : 'Photovoltaic Inverters'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Inversores eficientes para sistemas solares residenciales y comerciales.' : 'Efficient inverters for residential and commercial solar systems.'}</p>
            </div>
            {/* Producto 2 */}
            <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
              <img src="https://cdn.sma.de/fileadmin/_processed_/e/9/csm_SMA-eCharger-new_426x426_6bee40c344.webp" alt="Almacenamiento de Energía" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">{language === 'es' ? 'Almacenamiento de Energía' : 'Energy Storage'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Soluciones avanzadas para el almacenamiento de energía solar.' : 'Advanced solutions for storing solar energy.'}</p>
            </div>
            {/* Producto 3 */}
            <div className="bg-gray-200 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center">
              <img src="https://cdn.sma.de/fileadmin/_processed_/4/9/csm_SMA-Home-Storage_426x426_50b47857a5.webp" alt="Cargador Solar EV" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">{language === 'es' ? 'Cargador Solar EV' : 'Solar EV Charger'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Cargadores solares para vehículos eléctricos, optimizando el uso de energía renovable.' : 'Solar chargers for electric vehicles, optimizing the use of renewable energy.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sma;

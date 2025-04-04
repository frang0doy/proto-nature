import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Hidroponia = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, [location]);

  const handleGoHome = () => {
    navigate("/");  
    window.location.reload();  
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md" data-aos="fade-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6 px-6">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo512.png" alt="Logo" className="w-32 h-auto" />
          </Link>
          <button onClick={toggleLanguage} className="text-white hover:text-green-500" data-aos="fade-left">
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      <nav className="bg-gray-200 py-6 mt-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <button onClick={handleGoHome} className="text-black hover:underline">
            {language === 'es' ? 'Inicio' : 'Home'}
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Hidroponía</span>
        </div>
      </nav>

      {/* Sección Principal con Imagen y Texto */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-200 py-12 px-6 md:px-12">
        {/* Imagen - Ocupa la mitad en pantallas grandes */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img 
            src="https://infonegocios.info/content/images/2022/07/21/189303/conversions/pablo-buzzo-menu-creativo-4-nqn-medium-size.jpg" 
            alt="Hidroponía" 
            className="w-full h-auto shadow-lg"
          />
        </div>

        {/* Texto - Ocupa la otra mitad en pantallas grandes */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            {language === 'es' ? '¿Quiénes somos?' : 'About Us'}
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
            {language === 'es' 
              ? 'La hidroponía automatizada está revolucionando la forma en que se cultivan los alimentos, permitiendo producir hierbas y vegetales frescos en espacios reducidos y sin necesidad de conocimientos avanzados en agricultura. Gracias a sistemas inteligentes de cultivo gestionados de forma remota, es posible optimizar el uso de agua y nutrientes, reduciendo el desperdicio de alimentos y el impacto ambiental. Esta tecnología ofrece una alternativa sostenible para restaurantes, hospitales y supermercados, garantizando ingredientes frescos durante todo el año y promoviendo un consumo más responsable.'
              : 'Automated hydroponics is revolutionizing the way food is grown, allowing fresh herbs and vegetables to be produced in small spaces and without the need for advanced agricultural knowledge. Thanks to intelligent, remotely managed growing systems, it is possible to optimize the use of water and nutrients, reducing food waste and environmental impact. This technology offers a sustainable alternative for restaurants, hospitals, and supermarkets, ensuring fresh ingredients year-round and promoting more responsible consumption.'
            }
          </p>
          <div className="mt-6 flex items-center gap-4">
  <a href="https://babylonmicrofarms.com/" target="_blank" rel="noopener noreferrer">
    <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all">
      {language === 'es' ? 'Ver más' : 'Learn More'}
    </button>
  </a>
  <img src="/firma.png" alt="Firma" className="w-24 h-auto" />
</div>
        </div>
      </section>

      <Footer id="contacto" />
    </div>
  );
};

export default Hidroponia;

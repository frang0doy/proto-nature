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

      {/* Contenido principal */}
      <section className="flex flex-col items-center justify-center bg-gray-200 py-12 px-6">
        <div className="w-full max-w-5xl" data-aos="fade-right">
          <img 
            src="https://infonegocios.info/content/images/2022/07/21/189303/conversions/pablo-buzzo-menu-creativo-4-nqn-medium-size.jpg" 
            alt="Hidroponía" 
            className="w-full h-auto shadow-lg"
          />
        </div>

        <div className="w-full max-w-5xl mt-8 px-2" data-aos="fade-up">
        <div className="w-full max-w-5xl mt-8 px-2" data-aos="fade-up">
  <h2 className="text-black text-justify text-xl font-semibold leading-relaxed">
    {language === 'es'
      ? 'La hidroponía es una técnica innovadora de cultivo que permite el crecimiento de plantas sin necesidad de suelo, utilizando soluciones minerales en agua. Esta práctica no solo optimiza el uso del espacio y el agua, sino que también reduce el uso de pesticidas, ofreciendo alimentos más limpios y saludables. Es ideal para ambientes urbanos o lugares con suelos poco fértiles, promoviendo una agricultura sostenible y eficiente.'
      : 'Hydroponics is an innovative cultivation method that allows plants to grow without soil, using nutrient-rich water solutions. This technique optimizes space and water usage while reducing the need for pesticides, resulting in cleaner, healthier food. It is ideal for urban environments or areas with poor soil, promoting sustainable and efficient agriculture.'
    }
  </h2>
</div>

        </div>

        <div className="w-full max-w-5xl mt-12" data-aos="fade-up">
          <div className="w-full aspect-video shadow-lg overflow-hidden">
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
      </section>

      <Footer id="contacto" />
    </div>
  );
};

export default Hidroponia;

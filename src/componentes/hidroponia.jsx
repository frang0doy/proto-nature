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
        

      </section>
      {/* Sección de Video Promocional */}
<section className="w-full bg-gray-200 py-12 px-4" data-aos="fade-up">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-black text-2xl md:text-3xl font-semibold text-center mb-6">
      {language === 'es' ? 'Conocé nuestra tecnología en acción' : 'See our technology in action'}
    </h3>
    <div className="w-full aspect-video shadow-lg rounded-2xl ">
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

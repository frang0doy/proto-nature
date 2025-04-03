import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 
import AOS from 'aos'; // Importamos AOS
import 'aos/dist/aos.css'; // Importamos los estilos de AOS

const Hoppecke = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, // Duración de la animación (en milisegundos)
      easing: 'ease-in-out', // Efecto de aceleración de la animación
      once: true, // Si se debe ejecutar solo una vez
    });

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
      <nav className="bg-gradient-to-r from-gray-300 via-gray-400 to-white py-2 pb-0 overflow-hidden mt-4">
        <div className="max-w-6xl mx-auto">
          <button onClick={handleGoHome} className="text-black hover:underline">
            {language === 'es' ? 'Inicio' : 'Home'}
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Hoppecke</span>
        </div>
      </nav>

      {/* Parallax Section */}
      <section 
  className="relative w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/slider/New_Slider_Standard/HOPPECKE_Datacenter.jpg')" }} 
  data-aos="fade-up"
>
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4">
    {/* Texto dividido en dos líneas */}
    <h1 className="text-white text-3xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center leading-tight">
      <span className="block">  
        {language === 'es' ? 'Baterías de alta eficiencia' : 'High-efficiency batteries'}
      </span>
      <span className="block">
        {language === 'es' ? 'para respaldo energético' : 'for energy backup'}
      </span>
    </h1>
    
    <div className="absolute bottom-8 flex space-x-4">
      {/* Botones traducidos */}
      <a href="https://www.hoppecke.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-400">
          {language === 'es' ? 'Ver más' : 'Learn More'}
        </button>
      </a>
      <a href="https://shop-nature.vercel.app" target="_blank" rel="noopener noreferrer">
        <button className="bg-gray-400 text-black px-6 py-3 rounded-md hover:bg-white">
          {language === 'es' ? 'Comprar' : 'Buy'}
        </button>
      </a>
    </div>
  </div>
</section>


      {/* About Hoppecke Section */}
      <section className="p-12 bg-gray-100" id="nosotros" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">{language === 'es' ? '¿Quiénes somos?' : 'About Us'}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {language === 'es' ? 'Hoppecke es un líder global especializado en sistemas de almacenamiento de energia y baterías avanzadas.' : 'Hoppecke is a global leader specializing in energy storage systems and advanced batteries..'}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white" id="productos" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">{language === 'es' ? 'Productos' : 'Products'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Producto 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" data-aos="zoom-in">
              <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/trak_uplift_save-_image_2_home.png" alt="Battery" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{language === 'es' ? 'Batería de Plomo Ácido' : 'Lead-Acid Battery'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Soluciones avanzadas para almacenamiento de energía industrial.' : 'Advanced solutions for industrial energy storage.'}</p>
            </div>
            {/* Producto 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" data-aos="zoom-in">
              <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/grid_power_vm_group_image_1_home.png" alt="Battery" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{language === 'es' ? 'Bateria para energia solar ' : 'Battery for solar energy'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Integración de energía solar con almacenamiento eficiente.' : 'Solar energy integration with efficient storage.'}</p>
            </div>
            {/* Producto 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" data-aos="zoom-in">
              <img src="https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/Products-Import/grid-xtreme-vr-green-series_group_image_1_home.png" alt="Battery" className="w-64 h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{language === 'es' ? 'Sistema de Almacenamiento de Energía' : 'Energy Storage System'}</h3>
              <p className="text-gray-600 mt-2">{language === 'es' ? 'Soluciones completas de almacenamiento para optimizar el uso de la energía renovable.' : 'Complete storage solutions to optimize the use of renewable energy.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer id="contacto" />
    </div>
  );
};

export default Hoppecke;

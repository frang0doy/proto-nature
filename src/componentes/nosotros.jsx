import React, { useState, useEffect } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; // Icono de play
import { useLanguage } from './LenguajeContext';
import AOS from 'aos'; // Importamos AOS
import 'aos/dist/aos.css'; // Importamos los estilos de AOS

const Nosotros = () => {
  const { language } = useLanguage(); // Acceder al idioma actual

  // Estados para mostrar/ocultar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Textos según el idioma
  const texts = {
    es: {
      title: 'Inclucion social a traves de la energia solar',
      description:
        'En d.light, nos dedicamos a transformar vidas a través de soluciones de energía solar asequibles y sostenibles, empoderando a más de 175 millones de personas en todo el mundo. Nuestro objetivo es proporcionar acceso a energía limpia que fomente la educación, mejore la salud y cree oportunidades económicas. Nuestra visión es transformar mil millones de vidas para 2030, allanando el camino hacia un futuro más brillante y sostenible.',
      moreInfo: 'Más información',
    },
    en: {
      title: 'Social inclusion through ',
      subtitle: ' solar energy',
      description:
        'At d.light, we are dedicated to transforming lives through affordable and sustainable solar energy solutions, empowering over 175 million people around the world. Our goal is to provide access to clean energy that fosters education, improves health, and creates economic opportunities. Our vision is to transform one billion lives by 2030, paving the way for a brighter and more sustainable future.',
      moreInfo: 'More Information',
    },
  };

  // Inicializamos AOS cuando el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: 'ease-in-out', // Tipo de suavizado de la animación
      once: true, // Solo se ejecuta una vez
    });
  }, []);

  return (
    <section id="about-us" className="overflow-hidden bg-gradient-to-r from-gray-300 via-gray-400 to-white py-16 pb-62">
      {/* Contenedor centralizado con flexbox */}
      <div className="flex flex-col sm:flex-row items-start justify-between w-full px-12 sm:px-60 gap-12 mx-auto">
        {/* Contenido de texto */}
        <div className="text-center sm:text-left sm:w-2/3 md:w-1/2">
          <h2
            className="text-2xl font-semibold text-black md:text-3xl mb-4"
            data-aos="fade-up"
          >
            <span className="block">{texts[language].title}</span>
            <span className="block text-purple-600">{texts[language].subtitle}</span>
          </h2>

          <p
  className="mt-2 text-lg text-gray-900 sm:text-xl sm:text-left leading-relaxed text-justify"
  style={{
    wordBreak: 'keep-all',
    textAlignLast: 'left', // Cambié de justify a left
    whiteSpace: 'normal', // Mantuvimos 'normal' para evitar saltos de línea innecesarios
  }}
  data-aos="fade-up"
  data-aos-delay="200"
>
  {texts[language].description}
</p>


          <div className="mt-6">
            <a
              href="https://www.dlight.com/"
              target="_blank"  // Este atributo abre el enlace en una nueva pestaña
              rel="noopener noreferrer"  // Seguridad adicional para abrir en una nueva pestaña
              className="inline-block rounded bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-yellow-400"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {texts[language].moreInfo}
            </a>
          </div>
        </div>

        {/* Imagen ajustada */}
        <div
          className="relative flex justify-center items-start sm:w-2/3 md:w-1/2 sm:mt-0"  // Cambié sm:mt-8 por sm:mt-0
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="relative w-full h-64 sm:h-[80%]">
            <img
              alt="Imagen"
              src="https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fhome%2Fabout-thumbnail.png&w=1080&q=75"
              className="h-full w-full object-cover rounded-lg"
            />

            <button
              onClick={openModal}
              className="absolute top-4 left-4 text-black bg-white p-3 rounded-full shadow-md transition transform duration-300 ease-in-out hover:scale-110"
            >
              <PlayIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          <div className="relative bg-white rounded-lg p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 z-50">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              X
            </button>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/CKfp1-7Pysg?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nosotros;

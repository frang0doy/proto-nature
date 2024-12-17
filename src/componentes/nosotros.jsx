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
      title: 'Haz tu vida más brillante con d.light',
      description:
        'En d.light, nos dedicamos a transformar vidas a través de soluciones de energía solar asequibles y sostenibles, empoderando a más de 175 millones de personas en todo el mundo. Nuestro objetivo es proporcionar acceso a energía limpia que fomente la educación, mejore la salud y cree oportunidades económicas. Nuestra visión es transformar mil millones de vidas para 2030, allanando el camino hacia un futuro más brillante y sostenible.',
      moreInfo: 'Más información',
    },
    en: {
      title: 'Make Your Life Brighter with d.light',
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
    <section className="overflow-hidden bg-gradient-to-r from-gray-300 via-gray-400 to-white py-16">
      {/* Contenedor centralizado con flexbox */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-screen-xl px-8 md:px-16 gap-8 mx-auto">
        <div className="text-center sm:text-left sm:w-1/2">
          <h2
            className="text-2xl font-bold text-gray-900 md:text-3xl mb-4"
            data-aos="fade-up" // Animación de aparición hacia arriba
          >
            {texts[language].title}
          </h2>

          <p
            className="mt-4 text-gray-500"
            data-aos="fade-up" // Animación de aparición hacia arriba
            data-aos-delay="200" // Añadimos un pequeño retraso para que no todo ocurra a la vez
          >
            {texts[language].description}
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block rounded bg-purple-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400"
              data-aos="fade-up" // Animación de aparición hacia arriba
              data-aos-delay="400" // Retraso para la animación
            >
              {texts[language].moreInfo}
            </a>
          </div>
        </div>

        {/* Contenedor de la imagen con el botón dentro */}
        <div
          className="relative flex justify-center items-center sm:w-1/2"
          data-aos="zoom-in" // Efecto de zoom al entrar
          data-aos-delay="500" // Retraso para la animación
        >
          {/* Imagen ajustada */}
          <div className="relative w-full h-64 sm:h-[80%]">
            <img
              alt="Imagen"
              src="https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fhome%2Fabout-thumbnail.png&w=1080&q=75"
              className="h-full w-full object-cover rounded-lg"
            />

            {/* Botón de reproducir dentro de la imagen */}
            <button
              onClick={openModal}
              className="absolute top-4 left-4 text-white bg-purple-600 p-3 rounded-full shadow-md transition transform duration-300 ease-in-out hover:scale-110"
            >
              <PlayIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal con video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Fondo borroso */}
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
              height="500" // Aumentamos la altura del video
              src="https://www.youtube.com/embed/CKfp1-7Pysg?autoplay=1" // Aquí se coloca el ID del video y autoplay
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

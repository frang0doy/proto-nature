import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; // Icono de play
import { useLanguage } from './LenguajeContext'; 

const Nosotros = () => {
  const { language } = useLanguage(); // Acceder al idioma actual

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

  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {texts[language].title}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            {texts[language].description}
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {texts[language].moreInfo}
            </a>
          </div>
        </div>
      </div>

      {/* Contenedor de la imagen con el botón dentro */}
      <div className="relative flex justify-center items-center overflow-hidden rounded-lg">
        {/* Imagen ajustada */}
        <div className="relative h-[80%] w-[80%]">
          <img
            alt="Imagen"
            src="https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Fhome%2Fabout-thumbnail.png&w=1080&q=75"
            className="h-full w-full object-cover rounded-lg"
          />

          {/* Botón de reproducir dentro de la imagen */}
          <button
            className="absolute top-4 left-4 text-white bg-purple-600 p-3 rounded-full shadow-md transition transform duration-300 ease-in-out hover:scale-110"
          >
            <PlayIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

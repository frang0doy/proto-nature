import React, { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; // Icono de play

export default function Nosotros() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Haz tu vida más brillante con d.light
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            En d.light, nos dedicamos a transformar vidas a través de soluciones de energía solar asequibles y sostenibles, empoderando a más de 175 millones de personas en todo el mundo. Nuestro objetivo es proporcionar acceso a energía limpia que fomente la educación, mejore la salud y cree oportunidades económicas. Nuestra visión es transformar mil millones de vidas para 2030, allanando el camino hacia un futuro más brillante y sostenible.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Más información
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
            onClick={handlePlayClick}
            className="absolute top-4 left-4 text-white bg-purple-600 p-3 rounded-full shadow-md transition transform duration-300 ease-in-out hover:scale-110"
          >
            <PlayIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Video modal (solo se muestra cuando el video es clickeado) */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/CKfp1-7Pysg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

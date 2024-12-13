import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  // Estado para manejar la posición del scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  // Hook useEffect para escuchar el desplazamiento del scroll
  useEffect(() => {
    const handleScroll = () => {
      // Actualizar la posición del scroll
      setScrollPosition(window.scrollY);
    };

    // Añadir el event listener al evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcular el desplazamiento de los textos y botones
  const textStyle = {
    transform: `translateY(${scrollPosition * 0.3}px)`, // Los textos se mueven un 30% de la velocidad de desplazamiento
    opacity: Math.min(1, 1 - scrollPosition / 400), // Desvanecer el texto a medida que se hace scroll
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Agregar una transición suave
  };

  const buttonStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`, // Los botones se mueven un 50% de la velocidad de desplazamiento
    opacity: Math.min(1, 1 - scrollPosition / 300), // Desvanecer los botones a medida que se hace scroll
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Agregar una transición suave
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/13018432/pexels-photo-13018432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // Aplicar el efecto parallax
        backgroundPosition: `center ${scrollPosition * 0.5}px`, // Controlar el movimiento de la imagen de fondo
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-center text-white">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-5xl" style={textStyle}>
            UNIDOS POR UNA NUEVA CONCIENCIA.
          </h1>

          <p className="mt-4 text-sm sm:text-xl text-white" style={textStyle}>
            Soluciones energéticas innovadoras para un futuro más limpio y eficiente.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-500 focus:outline-none focus:ring sm:w-auto"
              href="#"
              style={buttonStyle}
            >
              Conoce más
            </a>

            <a
              className="block w-full rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-500 focus:outline-none focus:ring sm:w-auto"
              href="#"
              style={buttonStyle}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  // Estado para manejar la posición del scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  // Hook useEffect para escuchar el desplazamiento del scroll
  useEffect(() => {
    const handleScroll = () => {
      // Usar requestAnimationFrame para mejorar el rendimiento
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Estilos para el texto con desplazamiento
  const textStyle = {
    transform: `translateY(${scrollPosition * 0.3}px)`, // Los textos se mueven un 30% de la velocidad de desplazamiento
    opacity: Math.min(1, 1 - scrollPosition / 400), // Desvanecer el texto a medida que se hace scroll
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Agregar una transición suave
  };

  // Estilos para los botones con desplazamiento
  const buttonStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`, // Los botones se mueven un 50% de la velocidad de desplazamiento
    opacity: Math.min(1, 1 - scrollPosition / 300), // Desvanecer los botones a medida que se hace scroll
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Agregar una transición suave
  };

  // Estilos para móviles (desactivar parallax)
  const mobileTextStyle = {
    ...textStyle,
    transform: 'translateY(0)', // Desactivar el parallax en móviles
  };

  const mobileButtonStyle = {
    ...buttonStyle,
    transform: 'translateY(0)', // Desactivar el parallax en móviles
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/18316989/pexels-photo-18316989/free-photo-of-negro-energia-renovable-paneles-solares-energia-solar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // La imagen de fondo se queda fija
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-center text-white">
        <div>
          <h1
            className="text-3xl font-extrabold sm:text-5xl"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            UNIDOS POR UNA NUEVA CONCIENCIA.
          </h1>

          <p
            className="mt-4 text-sm sm:text-xl text-white"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            Soluciones energéticas innovadoras para un futuro más limpio y eficiente.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-400 focus:outline-none focus:ring sm:w-auto sm:text-base"
              href="#"
              style={window.innerWidth < 640 ? mobileButtonStyle : buttonStyle}
            >
              Conoce más
            </a>

            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-400 focus:outline-none focus:ring sm:w-auto sm:text-base"
              href="#"
              style={window.innerWidth < 640 ? mobileButtonStyle : buttonStyle}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

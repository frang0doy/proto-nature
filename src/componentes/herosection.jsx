import React, { useState, useEffect } from 'react';
import { useLanguage } from './LenguajeContext'; // Asegúrate de que este archivo existe y tiene el contexto de idioma

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

  // Obtener el idioma actual desde el contexto
  const { language } = useLanguage();

  // Contenido para español e inglés
  const texts = {
    heading: {
      es: "UNIDOS POR UNA NUEVA CONCIENCIA",
      en: "UNITED FOR A NEW CONSCIOUSNESS"
    },
    subheading: {
      es: "Soluciones energéticas innovadoras para un futuro más limpio y eficiente.",
      en: "Innovative energy solutions for a cleaner and more efficient future."
    },
    button1: {
      es: "Conoce más",
      en: "Learn More"
    },
    button2: {
      es: "Contáctanos",
      en: "Contact Us"
    }
  };

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
          'url(https://images.pexels.com/photos/977772/pexels-photo-977772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // La imagen de fondo se queda fija
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-center text-white">
        <div>
          <h1
            className="text-3xl font-extrabold sm:text-5xl lg:text-5xl"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            {language === 'es' ? texts.heading.es : texts.heading.en}
          </h1>
  
          <p
            className="mt-4 text-sm sm:text-2xl lg:text-4xl xl:text-3xl text-white"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            {language === 'es' ? texts.subheading.es : texts.subheading.en}
          </p>
  
          <div className="mt-16 flex sm:flex-row justify-center gap-4 sm:space-x-2">
  {/* Botón 1 */}
  <a
    className="block sm:w-auto rounded bg-white px-6 py-2 text-sm font-medium text-black shadow hover:bg-gray-400 focus:outline-none focus:ring sm:text-base"
    href="#nosotros"
    style={window.innerWidth < 640 ? mobileButtonStyle : buttonStyle}
  >
    {language === 'es' ? texts.button1.es : texts.button1.en}
  </a>

  {/* Botón 2 */}
  <a
    className="block sm:w-auto rounded bg-white px-6 py-2 text-sm font-medium text-black shadow hover:bg-gray-400 focus:outline-none focus:ring sm:text-base"
    href="#contact"
    style={window.innerWidth < 640 ? mobileButtonStyle : buttonStyle}
  >
    {language === 'es' ? texts.button2.es : texts.button2.en}
  </a>
</div>

        </div>
      </div>
    </section>
  );
  
  
}

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LenguajeContext';
import { ChevronDownIcon } from 'lucide-react'; // Asegurate de tener esta librería instalada

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll hacia abajo
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const texts = {
    heading: {
      es: "UNIDOS POR UNA NUEVA CONCIENCIA",
      en: "UNITED FOR A NEW CONSCIOUSNESS"
    },
    subheading: {
      es: "Soluciones energéticas innovadoras para un futuro más limpio y eficiente.",
      en: "Innovative energy solutions for a cleaner and more efficient future."
    }
  };

  const textStyle = {
    transform: `translateY(${scrollPosition * 0.3}px)`,
    opacity: Math.min(1, 1 - scrollPosition / 400),
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
  };

  const mobileTextStyle = {
    ...textStyle,
    transform: 'translateY(0)',
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/977772/pexels-photo-977772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
        <div>
          <h1
            className="text-3xl font-semibold sm:text-5xl lg:text-5xl"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            {language === 'es' ? texts.heading.es : texts.heading.en}
          </h1>

          <p
            className="mt-4 text-sm sm:text-2xl lg:text-4xl xl:text-2xl text-white"
            style={window.innerWidth < 640 ? mobileTextStyle : textStyle}
          >
            {language === 'es' ? texts.subheading.es : texts.subheading.en}
          </p>
        </div>
      </div>

      {/* Flecha para hacer scroll hacia abajo */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <ChevronDownIcon className="h-12 w-12 text-white animate-bounce" />
      </div>
    </section>
  );
}

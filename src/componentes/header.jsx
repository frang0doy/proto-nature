import React, { useState, useEffect } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from './LenguajeContext';

const translations = {
  es: {
    products: 'PRODUCTOS',
    team: 'EQUIPO',
    contact: 'CONTACTO',
  },
  en: {
    products: 'PRODUCTS',
    team: 'TEAM',
    contact: 'CONTACT',
  },
};

export default function Header() {
  const [scrolling, setScrolling] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 300, 1);
      setScrolling(opacity);

      if (scrollPosition > window.innerHeight * 0.6) {
        setBgColor('bg-black');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${bgColor}`}
        style={{
          boxShadow: scrolling > 0 ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex flex-shrink-0 ml-4 lg:ml-0 relative">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo</span>
              <img alt="Logo" src="/logo512.png" className="h-8 w-auto" />
            </a>
          </div>

          {/* Menú de navegación en pantallas grandes */}
          <div className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
            <div className="flex items-center space-x-12">
              {/* Enlace "Productos" sin menú desplegable con el mismo hover que los otros enlaces */}
              <a
                href="https://shop-nature.vercel.app"
                className="relative text-sm font-semibold text-white group"
                target="_blank" // Abre el enlace en una nueva pestaña
                rel="noopener noreferrer"
              >
                {t.products}
                <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>

              {/* Otros enlaces de navegación */}
              {[{ id: "team", label: t.team }, { id: "contact", label: t.contact }].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="relative text-sm font-semibold text-white group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Íconos en pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-white text-sm font-semibold py-2 px-4 cursor-pointer hover:text-indigo-600 transition-all"
            >
              {language === 'es' ? 'IN' : 'ES'}
            </button>
          </div>

          {/* Menú desplegable para dispositivos móviles */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            {mobileMenuOpen && (
              <>
                {/* Fondo borroso cuando el menú se abre */}
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"></div>

                {/* Menú deslizante */}
                <div className={`fixed top-0 right-0 w-[300px] h-full bg-black text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                  <div className="flex items-center justify-between mb-6">
                    {/* Logo y Botón X */}
                    <a href="#" className="-m-1.5 p-1.5">
                      <img alt="Logo" src="/logo512.png" className="h-8 w-auto" />
                    </a>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white p-2"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Enlaces de navegación */}
                  <div className="flex flex-col space-y-4 mb-6">
                    {[t.team, t.contact].map((item, index) => (
                      <div key={index}>
                        <a
                          href="#"
                          className="text-sm font-semibold cursor-pointer hover:text-indigo-600 py-2 px-4 w-full text-center rounded-md transition-all"
                        >
                          {item}
                        </a>
                        {index < 3 && <hr className="my-2 border-t border-gray-300" />}
                      </div>
                    ))}
                  </div>

                  {/* Espacio para íconos y botones alineados al final */}
                  <div className="flex flex-col items-center justify-end mt-auto space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
                      <button
                        onClick={toggleLanguage}
                        className="text-white text-sm font-semibold py-2 px-4 cursor-pointer hover:text-indigo-600 transition-all"
                      >
                        {language === 'es' ? 'IN' : 'ES'}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

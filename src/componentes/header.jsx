import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ShoppingCartIcon, SunIcon, ShoppingBagIcon, Battery50Icon, CloudIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { useLanguage } from './LenguajeContext';

const translations = {
  es: {
    products: 'PRODUCTOS',
    aboutUs: 'NOSOTROS',
    solutions: 'SOLUCIONES',
    team: 'EQUIPO',
    contact: 'CONTACTO',
    viewAll: 'Ver Todo',
  },
  en: {
    products: 'PRODUCTS',
    aboutUs: 'ABOUT US',
    solutions: 'SOLUTIONS',
    team: 'TEAM',
    contact: 'CONTACT',
    viewAll: 'View All',
  },
};

const products = [
  { name: 'Paneles Solares', href: '#', icon: SunIcon },
  { name: 'Hidroponia', href: '#', icon: ShoppingBagIcon },
  { name: 'Baterías', href: '#', icon: Battery50Icon },
  { name: 'Energía Eólica', href: '#', icon: CloudIcon },
];

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
            <PopoverGroup className="flex items-center space-x-12">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white relative group">
                  {t.products}
                  <ChevronDownIcon
                    className="h-5 w-5 text-white transition-transform duration-200"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <Popover.Panel className="absolute -left-2 top-full z-10 mt-3 inline-block overflow-hidden rounded-4xl bg-white shadow-lg ring-1 ring-gray-900/5 min-w-[280px]">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-black group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 whitespace-nowrap"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center bg-gray-50 p-4">
                    <a
                      href="#"
                      className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      {t.viewAll}
                    </a>
                  </div>
                </Popover.Panel>
              </Popover>

              {/* Otros enlaces de navegación */}
              {[t.aboutUs, t.solutions, t.team, t.contact].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative text-sm font-semibold text-white group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </PopoverGroup>
          </div>

          {/* Íconos en pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
            <button
              onClick={toggleLanguage}
              className="text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition-all"
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
              <div className="fixed top-0 right-0 w-[300px] h-full bg-black text-white p-6">
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
                  {[t.aboutUs, t.solutions, t.team, t.contact].map((item, index) => (
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
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

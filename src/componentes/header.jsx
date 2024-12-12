import React, { useState } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'; // Importa los componentes de Headless UI
import {
  ChevronDownIcon,
  PhoneIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
  Battery50Icon,
  CloudIcon,
  SunIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'; // Importamos los íconos adecuados
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLanguage } from './LenguajeContext';

const translations = {
  es: {
    products: 'Productos',
    aboutUs: 'Nosotros',
    solutions: 'Soluciones',
    team: 'Equipo',
    contact: 'Contacto',
    viewAll: 'Ver Todo',
  },
  en: {
    products: 'Products',
    aboutUs: 'About Us',
    solutions: 'Solutions',
    team: 'Team',
    contact: 'Contact',
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [popoverOpen, setPopoverOpen] = useState(false); // Estado para el menú de productos
  const { language, toggleLanguage } = useLanguage(); // Contexto para el idioma
  const t = translations[language]; // Traducciones dinámicas según el idioma

  return (
    <header className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo a la izquierda */}
        <div className="flex flex-shrink-0 ml-4 lg:ml-0">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Logo" src="/logo512.png" className="h-8 w-auto" />
          </a>
        </div>

        {/* Menú de productos en el centro */}
        <div className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
          <PopoverGroup className="flex items-center space-x-12">
            <Popover className="relative">
              <PopoverButton
                onClick={() => setPopoverOpen(!popoverOpen)}
                className="flex items-center gap-x-1 text-sm font-semibold text-white relative group"
              >
                {t.products}
                <ChevronDownIcon
                  className={`h-5 w-5 text-white transition-transform duration-200 ${
                    popoverOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </PopoverButton>

              {popoverOpen && (
                <PopoverPanel className="absolute -left-2 top-full z-10 mt-3 inline-block overflow-hidden rounded-4xl bg-white shadow-lg ring-1 ring-gray-900/5 min-w-[280px]">
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
                </PopoverPanel>
              )}
            </Popover>

            {/* Enlaces de navegación */}
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

        {/* Íconos a la derecha */}
        <div className="hidden lg:flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
          <button onClick={toggleLanguage}>
            <GlobeAltIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
          </button>
        </div>

        {/* Botón para menú móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Menú en móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out">
          <div className="bg-gray-800 text-white p-4 w-64 h-full fixed right-0 top-0 transform translate-x-0 transition-transform duration-500 ease-in-out">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              X
            </button>

            <div className="flex justify-between mb-8">
              <img alt="Logo" src="/logo512.png" className="h-8 w-auto" />
            </div>

            <div className="flex flex-col space-y-4">
              {[t.aboutUs, t.solutions, t.team, t.contact].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-semibold py-3 px-4 hover:bg-gray-700 rounded-md transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
                <button onClick={toggleLanguage}>
                  <GlobeAltIcon className="h-6 w-6 text-white cursor-pointer hover:text-indigo-600 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

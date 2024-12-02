import React, { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'; // Importa los componentes de Headless UI
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'; // Importa los íconos de Heroicons (outline)
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'; // Importa los íconos de Heroicons (solid)
import { ShoppingCartIcon, GlobeAltIcon } from '@heroicons/react/24/outline'; // Importamos los íconos adecuados
import { Battery50Icon, CloudIcon, SunIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'; // Importa los iconos adecuados

const products = [
  { name: 'Paneles Solares', href: '#', icon: SunIcon }, // Icono relacionado con paneles solares
  { name: 'Hidroponia', href: '#', icon: ShoppingBagIcon }, // Icono de la naturaleza o alternativa
  { name: 'Baterías', href: '#', icon: Battery50Icon }, // Icono de batería
  { name: 'Energía Eólica', href: '#', icon: CloudIcon }, // Icono de energía eólica (puede ser un ícono relacionado con el viento)
];
const callsToAction = [{ name: 'Ver Todo', href: '#', icon: PhoneIcon }];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <header className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="/logo512.png"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Botón para menú móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Cambia el estado del menú
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Menú en desktop */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white relative group">
              Productos
              <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
            </PopoverButton>

            {popoverOpen && (
              <PopoverPanel
                className="absolute -left-2 top-full z-10 mt-3 inline-block overflow-hidden rounded-4xl bg-white shadow-lg ring-1 ring-gray-900/5 min-w-[280px]"
              >
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
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      {item.name} {/* Eliminar el ícono */}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            )}
          </Popover>

          {['Nosotros', 'Soluciones', 'Equipo', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm font-semibold text-white group"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </PopoverGroup>

        {/* Iconos de carrito y lenguaje */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
          <a href="#" className="relative text-white group mb-2 hover:text-indigo-300">
            <ShoppingCartIcon aria-hidden="true" className="h-8 w-8 transition duration-200 ease-in-out" />
            <span className="absolute inset-x-0 bottom-[-4px] h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300"></span>
          </a>
          <a href="#" className="relative text-white group mb-2 hover:text-indigo-300">
            <GlobeAltIcon aria-hidden="true" className="h-8 w-8 transition duration-200 ease-in-out" />
            <span className="absolute inset-x-0 bottom-[-4px] h-[2px] scale-x-0 bg-indigo-600 transition-transform duration-300"></span>
          </a>
        </div>
      </nav>
     {/* Menú móvil */}
{mobileMenuOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">
    <div 
      className={`fixed inset-y-0 right-0 w-64 bg-gray-900 text-white p-6 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-3000`}
    >
      {/* Logo alineado a la izquierda y Botón de Cierre */}
      <div className="flex justify-between mb-6">
        <img
          src="/logo512.png"
          alt="Logo"
          className="h-8 w-auto"
        />
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Línea debajo del logo */}
      <div className="border-b-2 border-white mb-4"></div>

      {/* Enlaces del menú */}
      <div className="flex flex-col mt-4 space-y-4">
        {['Nosotros', 'Soluciones', 'Equipo', 'Contacto'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white text-xl mb-2 relative hover:text-indigo-500 transition-all duration-200"
          >
            {item}
          </a>
        ))}

        {/* Menú de Productos con línea debajo */}
        <Popover className="relative">
          <PopoverButton className="text-white text-xl mb-4 relative hover:text-indigo-500 transition-all duration-200">
            Productos
          </PopoverButton>
          {popoverOpen && (
            <PopoverPanel className="absolute top-full bg-white text-black p-4">
              {products.map((item) => (
                <a key={item.name} href={item.href} className="block mb-4">
                  {item.name}
                </a>
              ))}
            </PopoverPanel>
          )}
        </Popover>
        <div className="border-b-2 border-white mb-4"></div>
      </div>

      {/* Íconos de Carrito y Cambio de Idioma al lado */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-indigo-500 transition-all duration-200 flex items-center"
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-indigo-500 transition-all duration-200 flex items-center"
        >
          <GlobeAltIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
)}


</header>
  );
}
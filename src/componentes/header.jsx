// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para navegación

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-teal-600">
              <img src="/public/img/logo.png" alt="Tu Logo" className="h-16" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black transition hover:text-gray-500/75"
                    to="/hombre"
                  >
                    Hombre
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black transition hover:text-gray-500/75"
                    to="/informacion"
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

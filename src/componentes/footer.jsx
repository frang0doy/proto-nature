// src/componentes/footer.jsx
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección 1 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Acerca de</h5>
            <ul>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Dlight
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 2 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Legal</h5>
            <ul>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Nuestras Politicas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 4 - Iconos de redes sociales */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-6"> {/* Aumenté el margen inferior a mb-6 */}
              <a
                href="#"
                className="text-white hover:text-indigo-500"
              >
                <BsFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-500"
              >
                <BsInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-500"
              >
                <BsTwitter size={24} />
              </a>
            </div>
            {/* Logo debajo de los íconos */}
            <img
              src="/logo512.png" // Ruta del logo dentro de la carpeta public
              alt="Logo de la empresa"
              className="mx-auto w-32 mt-4" // Ajusté el margen superior a mt-4 para separar más
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 ProtoNature™. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

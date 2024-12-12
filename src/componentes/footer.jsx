import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from './LenguajeContext'; // Importar el hook de idioma

const Footer = () => {
  const { language } = useLanguage(); // Acceder al idioma actual

  // Textos según el idioma
  const texts = {
    es: {
      newsletterTitle: 'Suscríbete a nuestro boletín de noticias',
      newsletterDesc: 'Obtenga las últimas actualizaciones y percepciones entregadas en su bandeja de entrada',
      products: 'Productos',
      company: 'Compañía',
      legal: 'Legal',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      terms: 'Términos & Condiciones',
      copyright: '© 2024 ProtoNature. Todos los derechos reservados.',
    },
    en: {
      newsletterTitle: 'Subscribe to our newsletter',
      newsletterDesc: 'Get the latest updates and insights delivered to your inbox',
      products: 'Products',
      company: 'Company',
      legal: 'Legal',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      terms: 'Terms & Conditions',
      copyright: '© 2024 ProtoNature. All rights reserved.',
    },
  };

  return (
    <footer className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-2">
        {/* Sección superior con el párrafo */}
        <div className="lg:flex lg:items-start lg:gap-18">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">{texts[language].newsletterTitle}</h2>
                <h4 className="mt-4 text-gray-300 text-sm whitespace-nowrap">
                  {texts[language].newsletterDesc}
                </h4>
              </div>
            </div>

            {/* Aquí separo el formulario para que se quede a la parte derecha */}
            <div className="col-span-2 lg:col-span-3 mt-10 lg:mt-0 flex justify-end">
              <form className="w-full lg:w-96">
                <label htmlFor="UserEmail" className="sr-only">Email</label>
                <div className="flex items-center w-full">
                  <input
                    type="email"
                    id="UserEmail"
                    className="flex-1 px-4 py-2 text-black focus:outline-none focus:ring-0 border-2 border-white rounded-l-full"  // Sin borde azul
                  />
                  <button
                    className="bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition-none hover:bg-teal-600 border-2 border-white border-l-0 rounded-r-full"  // Borde solo en la parte derecha del botón
                  >
                    {texts[language].newsletterButton || 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Línea divisora completa con separación */}
        <div className="mt-16 border-t border-gray-700 w-full"></div>

        {/* Resto de las secciones de productos, compañía y legal */}
        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-8 lg:grid-cols-5 lg:gap-y-8">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].products}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="text-white transition hover:opacity-75"> Paneles Solares </a></li>
              <li><a href="#" className="text-white transition hover:opacity-75"> Hidroponia </a></li>
              <li><a href="#" className="text-white transition hover:opacity-75"> Baterias </a></li>
              <li><a href="#" className="text-white transition hover:opacity-75"> Energia Eolica </a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].company}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="text-white transition hover:opacity-75"> Nosotros </a></li>
              <li><a href="#" className="text-white transition hover:opacity-75"> Soluciones </a></li>
              <li><a href="#" className="text-white transition hover:opacity-75"> Equipo </a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].legal}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="text-white transition hover:opacity-75">{texts[language].terms}</a></li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex space-x-4 mt-1">
              <a href="#" className="text-white hover:opacity-75">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-white hover:opacity-75">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-white hover:opacity-75">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" className="text-white hover:opacity-75">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisora inferior con más separación */}
      <div className="mt-8 border-t border-gray-700 py-4">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <p className="text-sm text-gray-300">
            {texts[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

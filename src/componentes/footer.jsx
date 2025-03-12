import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from './LenguajeContext'; // Importar el hook de idioma

const Footer = () => {
  const { language } = useLanguage(); // Acceder al idioma actual

  // Textos según el idioma
  const texts = {
    es: {
      newsletterTitle: 'Suscríbete a nuestro boletín de noticias',
      newsletterDesc: 'Obtenga las últimas actualizaciones y percepciones entregadas en su bandeja de entrada',
      newsletterButton: 'Enviar',
      products: 'Productos',
      company: 'Compañía',
      contact: 'Contacto',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      copyright: '© 2024 ProtoNature. Todos los derechos reservados.',
      phone: '54 114545 9037',
      address: 'Machain 4639, Capital Federal',
      email: 'proyectos@protonature.com',
      panelesSolares: 'Paneles Solares',
      hidroponia: 'Hidroponia',
      baterias: 'Baterias',
      energiaEolica: 'Energia Eolica',
      nosotros: 'Nosotros',
      soluciones: 'Soluciones',
      equipo: 'Equipo',
    },
    en: {
      newsletterTitle: 'Subscribe to our newsletter',
      newsletterDesc: 'Get the latest updates and insights delivered to your inbox',
      newsletterButton: 'Submit',
      products: 'Products',
      company: 'Company',
      contact: 'Contact',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      copyright: '© 2024 ProtoNature. All rights reserved.',
      phone: '+54 114545 9037',
      address: 'Machain 4639, Capital Federal',
      email: 'proyectos@protonature.com',
      panelesSolares: 'Solar Panels',
      hidroponia: 'Hydroponics',
      baterias: 'Batteries',
      energiaEolica: 'Wind Energy',
      nosotros: 'About Us',
      soluciones: 'Solutions',
      equipo: 'Team',
    },
  };

  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-2">
        {/* Sección superior con el párrafo */}
        <div className="lg:flex lg:items-start lg:gap-18">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">{texts[language].newsletterTitle}</h2>
                <h4 className="mt-4 text-gray-300 text-sm whitespace-normal break-words sm:text-sm">
                  {texts[language].newsletterDesc}
                </h4>
              </div>
            </div>

            {/* Formulario de suscripción */}
            <div className="col-span-2 lg:col-span-3 mt-2 lg:mt-0 flex justify-end">
              <form className="w-full lg:w-96" action="https://formspree.io/f/mknkoyjq" method="POST">
                <label htmlFor="UserEmail" className="sr-only">Email</label>
                <div className="flex w-full">
                  <input
                    type="email"
                    name="email"
                    id="UserEmail"
                    className="w-3/4 px-4 py-2 text-black focus:outline-none focus:ring-0 border-2 border-white rounded-l-full"  // Input más largo
                    required
                  />
                  <button
                    type="submit"
                    className="w-1/4 bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition-none hover:bg-teal-600 border-2 border-white border-l-0 rounded-r-full"  // Botón más corto
                  >
                    {texts[language].newsletterButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Línea divisora completa con separación */}
        <div className="mt-6 border-t border-gray-700 w-full"></div>

        {/* Resto de las secciones de productos, compañía y legal */}
        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-8 lg:grid-cols-5 lg:gap-y-8">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].products}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href="#products" className="text-white transition hover:opacity-75">{texts[language].panelesSolares}</a></li>
              <li><a href="#products" className="text-white transition hover:opacity-75">{texts[language].hidroponia}</a></li>
              <li><a href="#products" className="text-white transition hover:opacity-75">{texts[language].baterias}</a></li>
              <li><a href="#products" className="text-white transition hover:opacity-75">{texts[language].energiaEolica}</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].company}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href="#nosotros" className="text-white transition hover:opacity-75">{texts[language].nosotros}</a></li>
              <li><a href="#solutions" className="text-white transition hover:opacity-75">{texts[language].soluciones}</a></li>
              <li><a href="#team" className="text-white transition hover:opacity-75">{texts[language].equipo}</a></li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-white">{texts[language].contact}</p>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li><a href={`tel:${texts[language].phone}`} className="text-white transition hover:opacity-75">{texts[language].phone}</a></li>
              <li>
                <a
                  href={`https://www.google.com/maps?q=${texts[language].address}`}
                  className="text-white transition hover:opacity-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {texts[language].address}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${texts[language].email}`}
                  className="text-white transition hover:opacity-75"
                >
                  {texts[language].email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex space-x-4 mt-1">
              <a href="https://www.facebook.com/p/Protonature-100081917389045/?locale=es_LA" className="text-white hover:opacity-75">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisora inferior con más separación */}
      <div className="mt-6 border-t border-gray-700 py-4">
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

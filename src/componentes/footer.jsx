import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from './LenguajeContext';

const Footer = () => {
  const { language } = useLanguage();

  const texts = {
    es: {
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
      newsletterButton: 'Enviar',
    },
    en: {
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
      newsletterButton: 'Submit',
    },
  };

  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-2">

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

          {/* Contacto */}
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

          {/* Redes + Newsletter */}
          <div className="col-span-2 sm:col-span-1">
  <div className="mt-6 flex flex-col sm:mt-0 sm:h-full sm:justify-between">
    <div className="flex items-center space-x-6">
      <a
        href="https://www.facebook.com/p/Protonature-100081917389045/?locale=es_LA"
        className="text-white hover:opacity-75"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <form
        className="flex space-x-2"
        action="https://formspree.io/f/mknkoyjq"
        method="POST"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-2 text-black focus:outline-none border-2 border-white rounded-full"
        />
        <button
          type="submit"
          className="bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 border-2 border-white rounded-full"
        >
          {texts[language].newsletterButton}
        </button>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-6 border-t border-gray-700 py-4">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <p className="text-sm text-gray-300">{texts[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

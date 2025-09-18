import React from "react";
import SubPageTemplate from './SubPageTemplate';
import Footer from './footer';
import { useLanguage } from './LenguajeContext';

const Longi = () => {
  const { language } = useLanguage();

  const products = [
    {
      title: language === 'es' ? 'Módulo Solar de Alta Eficiencia' : 'High Efficiency Solar Module',
      description: language === 'es' ? 'Con un diseño optimizado, nuestros módulos solares son perfectos para proyectos residenciales y comerciales.' : 'With optimized design, our solar modules are perfect for residential and commercial projects.',
      image: 'https://static.longi.com/X10_12e3b6df8d_5c1487f002.jpg',
      colorGradient: 'from-yellow-100 to-orange-100'
    },
    {
      title: language === 'es' ? 'Sistema de Almacenamiento Solar' : 'Solar Storage System',
      description: language === 'es' ? 'Soluciones avanzadas para almacenar y gestionar la energía solar de manera eficiente.' : 'Advanced solutions for storing and managing solar energy efficiently.',
      image: 'https://static.longi.com/Explorer_06_2c0e9cf07e.png',
      colorGradient: 'from-blue-100 to-indigo-100'
    }
  ];

  return (
    <SubPageTemplate
      companyName="LONGi Solar"
      heroImage="https://static.longi.com/industry_solution_748d38c4ea.jpg"
      heroTitle="LONGi"
      heroDescription={language === 'es' 
        ? 'Líder mundial en tecnología solar con módulos fotovoltaicos de alta eficiencia y soluciones innovadoras para un futuro sostenible.'
        : 'Global leader in solar technology with high-efficiency photovoltaic modules and innovative solutions for a sustainable future.'
      }
      aboutTitle={language === 'es' ? 'Sobre LONGi' : 'About LONGi'}
      aboutDescription={language === 'es' 
        ? 'LONGi Solar es una de las empresas líder especializada en la fabricación de módulos fotovoltaicos de alto rendimiento. Con más de 20 años de experiencia, hemos establecido nuevos estándares en eficiencia y confiabilidad en la industria solar.'
        : 'LONGi Solar is one of the leading companies specializing in the manufacture of high-performance photovoltaic modules. With over 20 years of experience, we have established new standards in efficiency and reliability in the solar industry.'
      }
      products={products}
      showFooter={true}
      FooterComponent={Footer}
    />
  );
};

export default Longi;

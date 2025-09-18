import React from "react";
import SubPageTemplate from './SubPageTemplate';
import Footer from './footer'; 
import { useLanguage } from './LenguajeContext'; 

const Sma = () => {
  const { language } = useLanguage();

  const products = [
    {
      title: language === 'es' ? 'Inversores Fotovoltaicos' : 'Photovoltaic Inverters',
      description: language === 'es' ? 'Inversores eficientes para sistemas solares residenciales y comerciales.' : 'Efficient inverters for residential and commercial solar systems.',
      image: 'https://cdn.sma.de/fileadmin/_processed_/8/a/csm_solar-wechselrichter-aus_bb8aee40ed.webp',
      colorGradient: 'from-blue-100 to-cyan-100'
    },
    {
      title: language === 'es' ? 'Almacenamiento de Energía' : 'Energy Storage',
      description: language === 'es' ? 'Soluciones avanzadas para el almacenamiento de energía solar.' : 'Advanced solutions for storing solar energy.',
      image: 'https://cdn.sma.de/fileadmin/_processed_/e/9/csm_SMA-eCharger-new_426x426_6bee40c344.webp',
      colorGradient: 'from-green-100 to-emerald-100'
    },
    {
      title: language === 'es' ? 'Cargador Solar EV' : 'Solar EV Charger',
      description: language === 'es' ? 'Cargadores solares para vehículos eléctricos, optimizando el uso de energía renovable.' : 'Solar chargers for electric vehicles, optimizing the use of renewable energy.',
      image: 'https://cdn.sma.de/fileadmin/_processed_/4/9/csm_SMA-Home-Storage_426x426_50b47857a5.webp',
      colorGradient: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <SubPageTemplate
      companyName="SMA"
      heroImage="https://cdn.sma.de/fileadmin/_processed_/2/3/csm_sma-header-company_ef0d339093.jpg"
      heroTitle="SMA"
      heroDescription={language === 'es' 
        ? 'Líder mundial en inversores solares y soluciones inteligentes para optimizar la energía renovable en hogares y empresas.'
        : 'Global leader in solar inverters and smart solutions to optimize renewable energy in homes and businesses.'
      }
      aboutTitle={language === 'es' ? 'Sobre SMA' : 'About SMA'}
      aboutDescription={language === 'es' 
        ? 'SMA es uno de los líderes mundiales en la fabricación de inversores solares, ofreciendo soluciones innovadoras para optimizar la energía renovable. Con más de 40 años de experiencia, hemos desarrollado tecnología de vanguardia que maximiza la eficiencia energética.'
        : 'SMA is one of the global leaders in manufacturing solar inverters, offering innovative solutions to optimize renewable energy. With over 40 years of experience, we have developed cutting-edge technology that maximizes energy efficiency.'
      }
      products={products}
      showFooter={true}
      FooterComponent={Footer}
    />
  );
};

export default Sma;

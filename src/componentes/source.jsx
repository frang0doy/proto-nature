import React from "react";
import SubPageTemplate from './SubPageTemplate';
import Footer from './footer';
import { useLanguage } from './LenguajeContext'; 

const Source = () => {
  const { language } = useLanguage();

  const products = [
    {
      title: language === 'es' ? 'Hydropanel®' : 'Hydropanel®',
      description: language === 'es' ? 'Genera agua potable a partir del aire utilizando energía solar.' : 'Generates drinking water from the air using solar energy.',
      image: 'https://source.co/cdn/shop/files/Roxi_Hydropanel_xray_1.jpg?v=1729116590&width=1920',
      colorGradient: 'from-blue-100 to-cyan-100'
    },
    {
      title: language === 'es' ? 'Hydropanel® Solar' : 'Hydropanel® Solar',
      description: language === 'es' ? 'Integración con soluciones solares para optimizar el uso de energía.' : 'Integrated with solar solutions to optimize energy usage.',
      image: 'https://source.co/cdn/shop/files/SOURCE_Residential_Panel.jpg?v=1719538523&width=1000',
      colorGradient: 'from-green-100 to-blue-100'
    },
    {
      title: language === 'es' ? 'Hydropanel® para Comunidades' : 'Hydropanel® for Communities',
      description: language === 'es' ? 'Soluciones personalizadas para comunidades y organizaciones.' : 'Custom solutions for communities and organizations.',
      image: 'https://www.businessnews.com.lb/cms/Portals/2/Business/2015/source-roundup-photo.jpg',
      colorGradient: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <SubPageTemplate
      companyName="SOURCE Global"
      heroImage="https://source.co/cdn/shop/files/SOURCE_commercial_field.png?v=1717197556&width=1000"
      heroTitle="SOURCE"
      heroDescription={language === 'es' 
        ? 'Revolucionando el acceso al agua potable con tecnología solar que genera agua limpia directamente del aire.'
        : 'Revolutionizing access to drinking water with solar technology that generates clean water directly from the air.'
      }
      aboutTitle={language === 'es' ? 'Sobre SOURCE' : 'About SOURCE'}
      aboutDescription={language === 'es' 
        ? 'SOURCE desarrolló la única tecnología que utiliza energía solar para producir agua potable a partir del aire. Nuestra innovación está transformando comunidades en todo el mundo, proporcionando acceso sostenible al agua limpia donde más se necesita.'
        : 'SOURCE developed the only technology that uses solar energy to produce drinking water from the air. Our innovation is transforming communities worldwide, providing sustainable access to clean water where it\'s needed most.'
      }
      products={products}
      showFooter={true}
      FooterComponent={Footer}
    />
  );
};

export default Source;

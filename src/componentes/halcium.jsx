import React from "react";
import SubPageTemplate from './SubPageTemplate';
import Footer from './footer';
import { useLanguage } from './LenguajeContext';

const Halcium = () => {
  const { language } = useLanguage();

  const products = [
    {
      title: language === 'es' ? 'Energía Eólica' : 'Wind Energy',
      description: language === 'es' ? 'Implementación de soluciones eólicas innovadoras para hogares y empresas.' : 'Implementing innovative wind solutions for homes and businesses.',
      image: 'https://static.wixstatic.com/media/8a6f9d_070d07515bcc445aabc5c7139cfdf1a6~mv2.jpg/v1/crop/x_24,y_0,w_3276,h_1500/fill/w_755,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Color-Lineup.jpg',
      colorGradient: 'from-blue-100 to-cyan-100'
    },
    {
      title: language === 'es' ? 'Almacenamiento de Energía' : 'Energy Storage',
      description: language === 'es' ? 'Soluciones avanzadas para almacenar energía de forma eficiente.' : 'Advanced solutions for efficiently storing energy.',
      image: 'https://static.wixstatic.com/media/8a6f9d_2d6d297f42ba4f9dad2d6f25cd7158d1~mv2.png/v1/fill/w_653,h_631,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/How%20to%20use.png',
      colorGradient: 'from-green-100 to-emerald-100'
    },
    {
      title: language === 'es' ? 'Soluciones Energéticas' : 'Energy Solutions',
      description: language === 'es' ? 'Soluciones energéticas personalizadas para diversos sectores.' : 'Customized energy solutions for various sectors.',
      image: 'https://static.wixstatic.com/media/8a6f9d_88ce7d63d27645cda67430745af466dc~mv2.png/v1/crop/x_255,y_0,w_1363,h_1274/fill/w_436,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Air-Inflow-1.png',
      colorGradient: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <SubPageTemplate
      companyName="Halcium"
      heroImage="https://static.wixstatic.com/media/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg/v1/fill/w_1903,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg"
      heroTitle="HALCIUM"
      heroDescription={language === 'es' 
        ? 'Revolucionando la energía eólica con la primera turbina eólica fija del mundo, diseñada para generar energía de manera eficiente y sostenible.'
        : 'Revolutionizing wind energy with the world\'s first fixed wind turbine, designed to generate energy efficiently and sustainably.'
      }
      aboutTitle={language === 'es' ? 'Sobre Halcium' : 'About Halcium'}
      aboutDescription={language === 'es' 
        ? 'Halcium desarrolló la primera turbina eólica fija para generar energía. Nuestra tecnología innovadora está transformando la forma en que aprovechamos la energía del viento, ofreciendo soluciones más eficientes y accesibles para hogares y empresas.'
        : 'Halcium developed the first fixed wind turbine to generate energy. Our innovative technology is transforming how we harness wind energy, offering more efficient and accessible solutions for homes and businesses.'
      }
      products={products}
      showFooter={true}
      FooterComponent={Footer}
    />
  );
};

export default Halcium;

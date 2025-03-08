import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma inicial

  // Función para cambiar entre idiomas
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Función de traducción que devuelve el texto traducido según el idioma actual
  const translate = (key) => {
    const translations = {
      es: {
        "Ver más": "Ver más",
        "Comprar": "Comprar",
        
        "Innovación en Energía": "Innovación en Energía",
        "Soluciones energéticas que marcan la diferencia": "Soluciones energéticas que marcan la diferencia",
        "Soluciones Globales": "Soluciones Globales",
        "Para industrias más sostenibles": "Para industrias más sostenibles",
        "Energía Solar de Alta Eficiencia": "Energía Solar de Alta Eficiencia",
        "Potencia tu futuro con energía limpia": "Potencia tu futuro con energía limpia",
        
        // Más traducciones aquí...
      },
      en: {
        "Ver más": "See more",
        "Comprar": "Buy",
        
        "Innovación en Energía": "Energy Innovation",
        "Soluciones energéticas que marcan la diferencia": "Energy solutions that make a difference",
        "Soluciones Globales": "Global Solutions",
        "Para industrias más sostenibles": "For more sustainable industries",
        "Energía Solar de Alta Eficiencia": "High Efficiency Solar Energy",
        "Potencia tu futuro con energía limpia": "Power your future with clean energy",
        
        // Más traducciones aquí...
      },
    };

    return translations[language][key] || key; // Devuelve la traducción o la clave si no existe
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

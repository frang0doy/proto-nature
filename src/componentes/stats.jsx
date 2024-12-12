import React from "react";
import { useLanguage } from './LenguajeContext'; // Asegúrate de importar el hook

export function Stats() {
  const { language } = useLanguage(); // Obtenemos el idioma actual desde el contexto

  // Definir los textos en diferentes idiomas
  const texts = {
    es: {
      title: "ALGUNOS NUMEROS EN EL MUNDO",
      subtitle: "Cuando usás energía limpia, hacés de nuestro planeta un mejor hogar.",
      cards: [
        {
          title: "Creación 24 Millones de Empleos",
          description: "Para el 2045 en el sector energético renovable"
        },
        {
          title: "1,1 Millones de Autos Eléctricos",
          description: "Para el 2020"
        },
        {
          title: "Hidroponia es 6 veces más eficiente por m2",
          description: "Que la agricultura convencional"
        }
      ],
      footer: "Argentina debe llegar al 20% de su matriz energética renovable para el 2025",
      currentStatus: "Actualmente cuenta sólo con el 4%"
    },
    en: {
      title: "SOME NUMBERS AROUND THE WORLD",
      subtitle: "When you use clean energy, you make our planet a better home.",
      cards: [
        {
          title: "Creation of 24 Million Jobs",
          description: "By 2045 in the renewable energy sector"
        },
        {
          title: "1.1 Million Electric Cars",
          description: "By 2020"
        },
        {
          title: "Hydroponics is 6 times more efficient per m2",
          description: "Than conventional agriculture"
        }
      ],
      footer: "Argentina must reach 20% of its renewable energy matrix by 2025",
      currentStatus: "Currently, it only has 4%"
    }
  };

  return (
    <div className="relative py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">{texts[language].title}</h2>
        <h4 className="text-2xl font-semibold mb-6">{texts[language].subtitle}</h4>
        
        <div className="flex justify-center items-center space-x-8">
          {/* Mapeo de las tarjetas de acuerdo con el idioma */}
          {texts[language].cards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xl">{texts[language].footer}</p>
        <p>{texts[language].currentStatus}</p>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from './LenguajeContext'; // Importar el hook de idioma
import OptimizedImage from './OptimizedImage';

const teamMembers = [
  {
    name: "Tomás Wentzel",
    title: "Director",
    imgSrc: "./tomas.jpg",
    titleTranslations: {
      es: "Director",
      en: "Director",
    },
  },
  {
    name: "Gisela Gonzalez  ",
    title: "Ventas",
    imgSrc: "./gisela.jpg",
    titleTranslations: {
      es: "Ventas",
      en: "Sales",
    },
  },
  {
    name: "Marco Emmanuel Ortiz",
    title: "Costos & plannig",
    imgSrc: "./marco.jpg",
    titleTranslations: {
      es: "Costos & planificación",
      en: "Costs & Planning",
    },
  },
  {
    name: "Michelle Gauweloose",
    title: "Comercio exterior",
    imgSrc: "./michelle.jpg",
    titleTranslations: {
      es: "Comercio exterior",
      en: "Foreign Trade",
    },
  },
  {
    name: "Roberto Fazzito",
    title: "Tecnico",
    imgSrc: "./roberto.jpg",
    titleTranslations: {
      es: "Técnico",
      en: "Technician",
    },
  },
  {
    name: "Marcelo Fazzito",
    title: "Tecnico",
    imgSrc: "./marcelo.jpg",
    titleTranslations: {
      es: "Técnico",
      en: "Technician",
    },
  },
  
];

const Equipo = () => {
  const { language } = useLanguage(); // Obtener el idioma actual
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para el slide actual
  const sliderRef = useRef(null); // Referencia para el slider

  const texts = {
    es: {
      title: "Nuestro Equipo",
      description:
        "Detrás de nuestras soluciones hay personas comprometidas con cada uno de los proyectos que llevamos adelante.",
    },
    en: {
      title: "Our Team",
      description:
        "Behind our solutions, there are people committed to each project we undertake.",
    },
  };

  // Función para mover el slider hacia la derecha
  const slideRight = () => {
    if (currentSlide < teamMembers.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Función para mover el slider hacia la izquierda
  const slideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Desplazamiento del slider cada vez que cambia el slide
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth; // Obtener el ancho de la tarjeta
      sliderRef.current.scrollTo({ left: currentSlide * cardWidth, behavior: "smooth" });
    }
  }, [currentSlide]); // Se ejecuta cada vez que currentSlide cambia

  return (
    <section id="team" className="py-16 px-4 bg-gradient-to-r from-gray-100 to-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800">{texts[language].title}</h1>
        <p className="text-lg text-gray-600 mt-4">{texts[language].description}</p>
      </div>

      {/* Contenedor del slider */}
      <div className="relative flex justify-center items-center">
        <div
          ref={sliderRef}
          className="overflow-x-hidden flex gap-6 pb-6 justify-start items-center"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl min-w-[250px] sm:min-w-[250px] md:min-w-[300px] flex-shrink-0"
            >
              <div className="flex justify-center mb-4">
                {/* Imagen más grande */}
                <OptimizedImage
                  src={member.imgSrc}
                  alt={`${member.name} - ${member.titleTranslations[language]}`}
                  className="w-40 h-40 rounded-full border-4 border-gray-300 object-cover"
                />
              </div>
              <div className="text-center">
                <span className="text-xl font-semibold text-gray-800 block mb-2">{member.name}</span>
                <span className="text-md text-gray-500">
                  {member.titleTranslations[language]} {/* Usar traducción para el título de la tarjeta */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación fuera de las cards (debajo del contenedor) */}
      <div className="flex justify-center gap-4 mt-2 sm:hidden">
        <button
          onClick={slideLeft}
          className="p-2 bg-transparent text-black border-2 border-black rounded-md hover:bg-gray-100 focus:outline-none transition duration-300"
        >
          {"<"} {/* Icono o texto para izquierda */}
        </button>

        <button
          onClick={slideRight}
          className="p-2 bg-transparent text-black border-2 border-black rounded-md hover:bg-gray-100 focus:outline-none transition duration-300"
        >
          {">"} {/* Icono o texto para derecha */}
        </button>
      </div>
    </section>
  );
};

export default Equipo;

import React, { useState, useRef } from "react";
import { useLanguage } from './LenguajeContext'; // Importar el hook de idioma

const teamMembers = [
  {
    name: "Tomás Wentzel",
    title: "Director",
    imgSrc: "./tomas.jpg",
  },
  {
    name: "Marco Emmanuel Ortiz",
    title: "Costos & plannig",
    imgSrc: "./marco.jpg",
  },
  {
    name: "Michelle Gauweloose",
    title: "Comercio exterior",
    imgSrc: "./michelle.jpg",
  },
  {
    name: "Roberto Fazzito",
    title: "Tecnico",
    imgSrc: "./roberto.jpg",
  },
  {
    name: "Marcelo Fazzito",
    title: "Tecnico",
    imgSrc: "./marcelo.jpg",
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

  // Función para desplazar el slider hacia la derecha
  const slideRight = () => {
    if (sliderRef.current && currentSlide < teamMembers.length - 1) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Función para desplazar el slider hacia la izquierda
  const slideLeft = () => {
    if (sliderRef.current && currentSlide > 0) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Para cambiar los puntos de navegación
  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 300 * index, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  return (
    <section id="team" className="py-16 px-4 bg-gradient-to-r from-gray-100 to-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">{texts[language].title}</h1>
        <p className="text-lg text-gray-600 mt-4">{texts[language].description}</p>
      </div>

      {/* Contenedor del slider */}
      <div className="relative flex justify-center items-center">
        <div
          ref={sliderRef}
          className="overflow-hidden flex gap-6 pb-6 scroll-smooth no-scrollbar justify-center items-center"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl min-w-[250px] sm:min-w-[300px] flex-shrink-0"
            >
              <div className="flex justify-center mb-4">
                {/* Imagen más grande */}
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-40 h-40 rounded-full border-4 border-gray-300 object-cover"
                />
              </div>
              <div className="text-center">
                <span className="text-xl font-semibold text-gray-800 block mb-2">{member.name}</span>
                <span className="text-md text-gray-500">{member.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Puntos de navegación (solo en responsive) */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4 sm:hidden">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;

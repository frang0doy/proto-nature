// Equipo.jsx
import React from "react";
import { useLanguage } from './LenguajeContext'; // Importar el hook de idioma

const teamMembers = [
  {
    name: "Tomás Wentzel",
    title: "Web Designer",
    imgSrc: "./tomas.jpg",
  },
  {
    name: "Marco Emmanuel Ortiz",
    title: "UI Designer",
    imgSrc: "./marco.jpg",
  },
  {
    name: "Michelle Gauweloose",
    title: "Web Developer",
    imgSrc: "./michelle.jpg",
  },
  {
    name: "Roberto Fazzito",
    title: "Mobile Designer",
    imgSrc: "./roberto.jpg",
  },
  {
    name: "Marcelo Fazzito",
    title: "Mobile Designer",
    imgSrc: "./marcelo.jpg",
  },
];

const Equipo = () => {
  const { language } = useLanguage(); // Obtener el idioma actual

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

  return (
    <section id="team" className="profile-slider py-16 px-4 bg-white">
      <div className="profile-slider__header text-center mb-12">
        <h1 className="profile-slider__title text-3xl font-bold text-black">
          {texts[language].title}
        </h1>
        <p className="text-lg text-black mt-4">
          {texts[language].description}
        </p>
      </div>

      {/* Contenedor de perfiles con grid */}
      <div className="profiles-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="profile w-60 h-72 bg-white rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="profile__image overflow-hidden rounded-lg">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="profile__content p-4 text-center flex flex-col justify-end">
              <span className="profile__name text-xl font-semibold text-black truncate">
                {member.name}
              </span>
              <span className="profile__title text-md text-black">{member.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipo;

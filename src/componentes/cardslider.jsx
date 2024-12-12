import React from "react";
import "../cardslider.css";
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

const CardSlider = () => {
  const { language } = useLanguage(); // Obtener el idioma actual

  // Textos según el idioma
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
    <section className="card-slider">
      {/* Título principal */}
      <div className="card-slider__header">
        <h1 className="card-slider__title">{texts[language].title}</h1>
        <p>{texts[language].description}</p>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="card__image">
              <img src={member.imgSrc} alt={member.name} />
            </div>
            <div className="card__content">
              <span className="card__name">{member.name}</span>
              <span className="card__title">{member.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;

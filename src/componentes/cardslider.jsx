import React from "react";
import "../cardslider.css";

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
  return (
    <section className="card-slider">
      {/* Título principal */}
      <div className="card-slider__header">
        <h1 className="card-slider__title">Nuestro Equipo</h1>
        <p>
          Detrás de nuestras soluciones hay personas comprometidas con cada uno
          de los proyectos que llevamos adelante.
        </p>
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

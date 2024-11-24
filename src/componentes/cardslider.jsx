import React, { useState } from 'react';
import '../cardslider.css'; 

const teamMembers = [
  {
    name: "Tomás Wentzel",
    title: "Web Designer",
    imgSrc: "./tomas.jpg", // Ruta correcta
  },
  {
    name: "Marco Emmanuel Ortiz",
    title: "UI Designer",
    imgSrc: "./marco.jpg", // Ruta correcta
  },
  {
    name: "Michelle Gauweloose",
    title: "Web Developer",
    imgSrc: "./michelle.jpg", // Ruta correcta
  },
  {
    name: "Roberto Fazzito",
    title: "Mobile Designer",
    imgSrc: "./roberto.jpg", // Ruta correcta
  },
  {
    name: "Marcelo Fazzito",
    title: "Mobile Designer",
    imgSrc: "./marcelo.jpg", // Ruta correcta
  },
];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="card-slider">
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
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

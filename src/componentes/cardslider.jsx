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

      <style>
        {`
        /* cardslider.css */
        /* Eliminar márgenes y rellenos innecesarios */
        body, html {
          margin: 0;
          padding: 0;
          background-color: #ffffff; /* Fondo blanco para todo el sitio */
        }

        /* Contenedor principal del slider */
        .card-slider {
          padding: 0; /* Eliminamos el padding de arriba y abajo */
          background-color: #ffffff; /* Fondo blanco */
          margin: 0; /* Aseguramos que no haya márgenes innecesarios */
        }

        .card-slider__header {
          text-align: center;
          margin-bottom: 20px; /* Reducimos el margen entre el título y las tarjetas */
        }

        .card-slider__title {
          font-size: 2.2rem; /* Reducción de tamaño de fuente */
          font-weight: bold;
          color: #333;
        }

        .card-slider__header p {
          font-size: 1.1rem; /* Reducción de tamaño de fuente */
          color: #666;
          margin-top: 10px;
        }

        /* Contenedor de las tarjetas */
        .cards-container {
          display: flex;
          justify-content: center; /* Alineamos las tarjetas al centro */
          align-items: flex-start; /* Alineación superior para evitar el espacio extra */
          flex-wrap: wrap;
          gap: 20px; /* Reducimos el espacio entre las tarjetas */
          margin: 0; /* Aseguramos que no haya márgenes adicionales */
        }

        /* Estilo de las tarjetas */
        .card {
          width: 250px; /* Reducimos el ancho de las tarjetas */
          height: 350px; /* Ajustamos la altura de las tarjetas */
          background-color: transparent; /* Fondo transparente */
          border-radius: 0; /* Eliminamos los bordes redondeados */
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: none; /* Eliminamos cualquier sombra en la tarjeta */
        }

        /* Imagen de la tarjeta */
        .card__image img {
          width: 100%;
          height: 250px; /* Ajustamos la altura de la imagen */
          object-fit: cover; /* La imagen se ajusta completamente sin bordes */
          transition: transform 0.8s ease; /* Cambio para hacer el zoom más lento */
        }

        /* Efecto hover solo en la imagen para hacer zoom */
        .card__image:hover img {
          transform: scale(1.1); /* Efecto de zoom más suave y lento */
        }

        /* Contenido de la tarjeta */
        .card__content {
          padding: 10px;
          text-align: center;
          flex-grow: 1; /* Esto permite que el contenido ocupe el espacio restante */
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Alineamos el contenido al fondo */
        }

        .card__name {
          display: block;
          font-size: 1.4rem; /* Ajustamos el tamaño de la fuente */
          font-weight: bold;
          color: #333;
          margin-bottom: 5px; /* Reducimos el margen para ajustarlo mejor */
          white-space: nowrap; /* Evitar que el texto se divida */
          overflow: hidden;
          text-overflow: ellipsis; /* Si el nombre es largo, se agrega "..." */
        }

        .card__title {
          display: block;
          font-size: 1.1rem; /* Ajustamos el tamaño de la fuente */
          color: #777;
          white-space: nowrap; /* Evitar que el texto se divida */
          overflow: hidden;
          text-overflow: ellipsis; /* Si el cargo es largo, se agrega "..." */
        }
        `}
      </style>
    </section>
  );
};

export default CardSlider;

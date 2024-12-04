import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Estilo personalizado para el carrusel
const CarouselWrapper = styled.div`
  width: 100%;
  margin: auto;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2px; /* Espacio entre logos */
  }

  .slick-slide img {
    width: 170px; /* Tamaño uniforme de los logos */
    height: 80px; /* Altura uniforme */
    object-fit: contain; /* Ajusta la imagen sin deformarla */
    display: block;
  }

  .slick-list {
    padding: 0 10px; /* Ajusta el espaciado interno */
  }

  .slick-prev,
  .slick-next {
    display: none !important; /* Elimina botones de navegación */
  }
`;

const logos = [
  { id: 1, src: "https://logowik.com/content/uploads/images/source650.logowik.com.webp", alt: "Logo 1" },
  { id: 2, src: "https://www.sevensensor.com/files/2020/05/sma.jpg", alt: "Logo 2" },
  { id: 3, src: "https://cdn.worldvectorlogo.com/logos/hoppecke.svg", alt: "Logo 3" },
  { id: 4, src: "https://www.conveyorsolutions.com/wp-content/uploads/2022/04/UniversalRobots-manufacturer.webp", alt: "Logo 4" },
  { id: 5, src: "https://play-lh.googleusercontent.com/zyNcm6V7DMJHqUp8EF0gRoy1y0BMbAsKwCFc9pENw3bAKz0QjwAVGekN-ZMqMS-I", alt: "Logo 5" },
  { id: 6, src: "https://flex-lineautomation.com/wp-content/uploads/2022/09/mir-Mobile-Industrial-Robots.jpeg", alt: "Logo 6" },
];

const Logo = () => {
  const settings = {
    dots: false, // Sin puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 6000, // Velocidad del desplazamiento
    slidesToShow: 4.5, // Muestra más de 4 logos
    slidesToScroll: 1, // Avanza continuamente hacia la derecha
    autoplay: true, // Movimiento automático
    autoplaySpeed: 0, // Velocidad automática continua
    cssEase: "linear", // Movimiento continuo sin pausas
    arrows: false, // Sin botones de navegación
    rtl: false, // Forzar desplazamiento hacia la derecha
    pauseOnHover: false, // No detenerse al pasar el mouse
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Logo;

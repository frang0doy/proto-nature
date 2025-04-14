import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Importación de los estilos de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Estilo personalizado para el carrusel
const CarouselWrapper = styled.div`
  width: 100%;
  margin: auto;
  background-color: white;
  padding: 20px 20px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .slick-slide img {
    width: 170px;
    height: 80px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    transition: transform 0.3s ease;
  }

  /* Zoom para los logos 3 y 4 */
  .zoomed-logo {
    transform: scale(1.4);
  }

  /* Seleccionamos el logo 5 (usando nth-child) */
  .slick-slide:nth-child(5) img {
    width: 80px;
    height: 60px;
  }

  .slick-list {
    padding: 0 10px;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const logos = [
  {
    id: 1,
    src: "https://logowik.com/content/uploads/images/source650.logowik.com.webp",
    alt: "Logo 1",
  },
  {
    id: 2,
    src: "https://www.sevensensor.com/files/2020/05/sma.jpg",
    alt: "Logo 2",
  },
  {
    id: 3,
    src: "https://cdn.worldvectorlogo.com/logos/hoppecke.svg",
    alt: "Logo 3",
  },
  {
    id: 4,
    src: "https://media.licdn.com/dms/image/v2/C560BAQFrLEf6l1peIQ/company-logo_200_200/company-logo_200_200/0/1630651652803/halcium_logo?e=2147483647&v=beta&t=_O2VA97oJ5wDjgt3aroOxj_zPnsFRktrZVth3vhFGUQ",
    alt: "Logo 4",
  },
  {
    id: 5,
    src: "https://www.dlight.com/_next/image?url=%2Fnew%2Fimages%2Flogo-primary.png&w=128&q=75",
    alt: "Logo 5",
  },
  {
    id: 6,
    src: "https://flex-lineautomation.com/wp-content/uploads/2022/09/mir-Mobile-Industrial-Robots.jpeg",
    alt: "Logo 6",
  },
];

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: false,
    pauseOnHover: false,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {logos.map((logo, index) => {
          const isZoomed = index === 2 || index === 3; // Logos 3 y 4
          return (
            <div key={logo.id} style={{ textAlign: "center" }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={isZoomed ? "zoomed-logo" : ""}
              />
            </div>
          );
        })}
      </Slider>
    </CarouselWrapper>
  );
};

export default Logo;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useLanguage } from './LenguajeContext';  // Importa el hook de idioma

const Empresas = ({ mainImage, mainTitle, mainSubtitle, smallImages }) => {
  const { translate, language } = useLanguage();  // Usamos el hook para obtener traducción e idioma


  


  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dotsClass: "slick-dots custom-dots",  // Custom dots styling
    prevArrow: (
      <div className="slick-prev slick-arrow text-white text-3xl bg-black p-4 rounded-full absolute left-6 z-100 hover:bg-gray-800 transition-all">
        ‹
      </div>
    ),
    nextArrow: (
      <div className="slick-next slick-arrow text-white text-3xl bg-black p-4 rounded-full absolute right-6 z-100 hover:bg-gray-800 transition-all">
        ›
      </div>
    ),
  };

  // Función para redirigir al sitio de compra
  const handleComprar = () => {
    window.location.href = "https://shop-nature.vercel.app";  // Redirige a la URL
  };

  return (
    <div id="empresas" className="flex flex-col items-center p-6 w-full">
      {/* Main Image Section */}
      <div className="relative w-full text-center">
        <img
          src={
            mainImage ||
            "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-Support-Hero-1920x1080_0000_IMG_3773.jpg-1024x576.jpg"
          }
          alt="Main"
          className="w-full h-[500px] object-cover rounded-none shadow-lg"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div> {/* Capa gris con opacidad */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-6">
          <h1 className="text-5xl font-semibold mb-4">{mainTitle}</h1>
          <p className="text-2xl mb-6">{mainSubtitle}</p>
          <div className="space-x-4">
            <Link to="/dlight">
              <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                {translate("Ver más")}
              </button>
            </Link>
            <button
              onClick={handleComprar} // Usamos la misma función de redirección para el botón "Comprar"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md shadow-md hover:bg-white hover:text-black transition-all"
            >
              {translate("Comprar")}
            </button>
          </div>
        </div>
      </div>

      {/* Source Image Section */}
      <div className="relative w-full text-center mt-6">
        <img
          src="https://source.co/cdn/shop/files/R3_Residential-Hydropanel_1I4A9984-sky_shopify.jpg?v=1717192505&width=3840"
          alt="Source"
          className="w-full h-[500px] object-cover rounded-none shadow-lg"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-30"></div> {/* Capa gris con opacidad */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-6">
          <h1 className="text-5xl font-semibold mb-4">{translate("Source")}</h1>
          <div className="space-x-4">
            <Link to="/source">
              <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                {translate("Ver más")}
              </button>
            </Link>
            <button
              onClick={handleComprar} // Usamos la misma función de redirección para el botón "Comprar"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md shadow-md hover:bg-white hover:text-black transition-all"
            >
              {translate("Comprar")}
            </button>
          </div>
        </div>
      </div>

      {/* Small Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6 w-full">
        {smallImages.map(({ img, title, subtitle }, index) => (
          <div key={index} className="text-center relative group">
            <div className="relative">
              {/* Imagen con opacidad gris */}
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-md shadow-md transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl"
              />
              {/* Capa gris con opacidad para resaltar el texto */}
              <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
              {/* Titulo centrado en la parte superior de la imagen */}
              <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white">
                {translate(title)}
              </h2>
              {/* Botones centrados en la parte inferior de la imagen */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row justify-center space-x-4 w-full items-center opacity-100 transition-all">
                {/* Enlaces redirigiendo a sus componentes correspondientes */}
                {index === 0 && (
                  <Link to="/hoppecke">
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                      {translate("Ver más")}
                    </button>
                  </Link>
                )}
                {index === 1 && (
                  <Link to="/longi">
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                      {translate("Ver más")}
                    </button>
                  </Link>
                )}
                {index === 2 && (
                  <Link to="/sma">
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                      {translate("Ver más")}
                    </button>
                  </Link>
                )}
                {index === 3 && (
                  <Link to="/halcium">
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
                      {translate("Ver más")}
                    </button>
                  </Link>
                )}
                <button
                  onClick={handleComprar}  // Usamos la misma función de redirección para el botón "Comprar"
                  className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all"
                >
                  {translate("Comprar")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full text-center mt-6">
  <img
    src="https://agfundernews.com/wp-content/uploads/2023/04/IMG_0060-e1680537292232.jpg"
    alt="Hidroponia"
    className="w-full h-[500px] object-cover rounded-none shadow-lg"
  />
  <div className="absolute inset-0 bg-gray-800 opacity-40"></div> {/* Capa gris con opacidad */}
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white p-1">
    
    {/* Título con menor interlineado */}
    <h1 className="text-5xl font-semibold leading-none">{translate("Hidroponía")}</h1>
    
    {/* "By" más grande + Imagen alineada */}
    <div className="flex items-center justify-center gap-[0px] text-2xl font-semibold mt-0">
      <span>By</span>
      <img src="/firma.png" alt="Firma" className="h-28 relative -translate-y-3" />
    </div>

    {/* Botón pegado aún más arriba */}
    <div className="mt-0">
      <Link to="/Hidroponia">
        <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition-all">
          {translate("Ver más")}
        </button>
      </Link>
    </div>
  </div>
</div>



<div className="w-screen mt-6 relative">
  <Slider {...sliderSettings}>
    {/* Primer Slide con imagen fija y título traducible */}
    <div className="relative bg-white w-screen mt-8">
      <div className="flex justify-center">
        <img
          src="/estadistica.png"
          alt={language === "es" ? "Estadísticas" : "Statistics"}
          className="h-[700px] w-full object-contain"
        />
      </div>
    </div>
    {/* Slides dinámicos con traducción manual */}
    {[
      {
        src: "https://source.co/cdn/shop/files/R3_Residential-Hydropanel_1I4A9984-sky_shopify.jpg?v=1717192505&width=3840",
        title: "Innovación en generación de agua",
      },
      {
        src: "https://www.hoppecke.com/fileadmin/Redakteur/Hoppecke-Main/slider/New_Slider_Standard/HOPPECKE_Datacenter.jpg",
        title: "Baterías de respaldo para servidores",
      },
      {
        src: "https://static.longi.com/industry_solution_748d38c4ea.jpg",
        title: "Paneles solares de alta eficiencia",
      },
      {
        src: "https://smartflower.com/wp-content/themes/smartflower/_content/residential/header.jpg",
        title: "Soluciones para consumidor final",
      },
    ].map((slide, index) => (
      <div key={index} className="relative w-screen">
        <img
          src={slide.src}
          alt={`Slide ${index + 1}`}
          className="w-full h-[700px] object-contain md:h-[400px] sm:h-[350px] lg:h-[700px] lg:w-full lg:object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
        <div className="absolute bottom-16 left-8 text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold md:text-3xl lg:text-2xl xl:text-3xl">
            {language === "es"
              ? slide.title
              : slide.title === "Innovación en generación de agua"
              ? "Innovation in water generation"
              : slide.title === "Baterías de respaldo para servidores"
              ? "Backup batteries for servers"
              : slide.title === "Paneles solares de alta eficiencia"
              ? "High-efficiency solar panels"
              : "Solutions for end consumers"}
          </h2>
        </div>
      </div>
    ))}
  </Slider>
</div>






    </div>
  );
};

export default Empresas;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Empresas = ({ mainImage, mainTitle, mainSubtitle, smallImages }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    prevArrow: <div className="slick-prev slick-arrow text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full absolute left-4 z-100 hover:bg-opacity-80">‹</div>,
    nextArrow: <div className="slick-next slick-arrow text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full absolute right-4 z-10 hover:bg-opacity-80">›</div>,
  };

  return (
    <div className="flex flex-col items-center p-6 w-full">
      {/* Main Image Section */}
      <div className="relative w-full text-center">
        <img
          src={mainImage || "https://earthshotprize.org/wp-content/uploads/2024/09/DLight-Support-Hero-1920x1080_0000_IMG_3773.jpg-1024x576.jpg"}
          alt="Main"
          className="w-full h-[500px] object-cover rounded-none shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-6">
          <h1 className="text-5xl font-semibold mb-4">{mainTitle}</h1>
          <p className="text-2xl mb-6">{mainSubtitle}</p>
          <div className="space-x-4">
          <Link to="/dlight">
  <button className="bg-white text-black px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
    Ver mas 
  </button>
</Link>
            <button className="bg-gray-400 text-black px-8 py-3 rounded-md shadow-md hover:bg-white transition">
              Comprar
            </button>
          </div>
        </div>
      </div>
      
      {/* Small Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-12 w-full">
        {smallImages.map(({ img, title, subtitle }, index) => (
          <div key={index} className="text-center relative">
            <div className="relative group">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-md shadow-md group-hover:scale-102 transition-transform duration-200"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-40 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm">{subtitle}</p>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition opacity-0 group-hover:opacity-100">
                Ver mas
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Slider Section */}
      <div className="w-full mt-12 relative">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 1" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/18516133/pexels-photo-18516133/free-photo-of-paisaje-campo-campos-rural.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 2" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 3" className="w-full h-[400px] object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Empresas;

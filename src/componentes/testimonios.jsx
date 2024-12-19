import React, { useEffect } from 'react';
import { useLanguage } from './LenguajeContext'; // Asegúrate de importar el hook correctamente
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonios = () => {
  const { language } = useLanguage(); // Obtenemos el idioma actual desde el contexto

  // Array de testimonios con nombre y texto
  const testimonials = [
    {
      name: 'Centro de salud de Otodo',
      description: 'Centro de salud que ahora disfruta de energía confiable.',
      text: 'Antes del Dlight iMAX10, nuestro centro de salud luchó con frecuentes cortes de energía afectando al paciente, gracias a Dlight ahora tenemos un poder confiable de energía.',
    },
    {
      name: 'Dickson Mbuvi',
      description: 'Trabajador y estudiante que aprovecha la energía confiable.',
      text: 'Equilibrar el trabajo en la ferretería de mi familia de día y estudiar por la noche fue duro, especialmente con constantes cortes de energía. Pero descubrir la linterna de la luz S30 lo cambió todo. Ahora, tengo las horas extras que necesito estudiar sin interrupción.',
    },
    {
      name: 'Mary',
      description: 'Cliente leal que ha usado Dlight por años.',
      text: 'Mary ha usado Dlight por mas de tres anos, y esta increiblemente satisfecha con la experiencia.',
    },
    {
      name: 'Beth karimi',
      description: 'Residente de área sin electricidad que experimentó un cambio con Dlight.',
      text: 'Beth esta contenta con la transformacion de d.light ha traido a su vida. Viviente en un area sin electricidad, acostumbrada a la oscuridad pero desde la instalacion todo cambio.',
    },
    {
      name: 'Joseph Odero',
      description: 'Cliente satisfecho con la iluminación consistente por años.',
      text: 'Joseph ha usado d.light por mas de ocho anos y no puede estar mas feliz con la iluminacion consistente y toda la noche que proporciona.',
    },
  ];

  useEffect(() => {
    const keenSliderActive = document.getElementById('keen-slider-active');
    const keenSliderCount = document.getElementById('keen-slider-count');

    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            origin: 'center',
            perView: 1.5,
            spacing: 16,
          },
        },
        '(min-width: 768px)': {
          slides: {
            origin: 'center',
            perView: 1.75,
            spacing: 16,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 3,
            spacing: 16,
          },
        },
      },
      created(slider) {
        slider.slides[slider.track.details.rel].classList.remove('opacity-40');
        keenSliderActive.innerText = slider.track.details.rel + 1;
        keenSliderCount.innerText = slider.slides.length;
      },
      slideChanged(slider) {
        slider.slides.forEach((slide) => slide.classList.add('opacity-40'));
        slider.slides[slider.track.details.rel].classList.remove('opacity-40');
        keenSliderActive.innerText = slider.track.details.rel + 1;

        // Eliminar la clase de fondo de gradiente de todas las tarjetas
        slider.slides.forEach((slide) => {
          slide.classList.remove('active-card');
        });

        // Añadir la clase 'active-card' a la tarjeta activa en el centro
        slider.slides[slider.track.details.rel].classList.add('active-card');
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  // Los textos en español o inglés según el idioma actual
  const texts = {
    es: {
      title: "EXPERIENCIA DEL CLIENTE",
      prev: "Anterior",
      next: "Siguiente"
    },
    en: {
      title: "Customer Experience",
      prev: "Previous slide",
      next: "Next slide"
    }
  };

  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-3xl font-bold text-black">
      {texts[language].title}
    </h2>
    <div className="mt-8">
      <div id="keen-slider" className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="keen-slider__slide opacity-40 transition-opacity duration-500"
          >
            <blockquote className="flex flex-col h-full justify-between rounded-lg p-6 sm:p-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-md">
              <div className="flex items-center gap-4">
                <div>
                  <p className="mt-0.5 text-lg font-medium text-black">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-gray-900">{testimonial.description}</p>
                </div>
              </div>
              <p className="mt-4 text-black flex-grow">{testimonial.text}</p>
            </blockquote>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label={texts[language].prev}
          id="keen-slider-previous"
          className="text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <p className="w-16 text-center text-sm text-gray-700">
          <span id="keen-slider-active"></span>
          /
          <span id="keen-slider-count"></span>
        </p>
        <button
          aria-label={texts[language].next}
          id="keen-slider-next"
          className="text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/* Padding final igual que al principio */}
  <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-16" />
</section>

  );
};

export default Testimonios;

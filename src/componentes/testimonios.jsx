import React, { useEffect } from 'react';
import { useLanguage } from './LenguajeContext'; // Asegúrate de importar el hook correctamente
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonios = () => {
  const { language } = useLanguage(); // Obtenemos el idioma actual desde el contexto

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
      title: "Experiencia del cliente",
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
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {texts[language].title}
        </h2>
        <div className="mt-8">
          <div id="keen-slider" className="keen-slider">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="keen-slider__slide opacity-40 transition-opacity duration-500">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {/* SVGs and content */}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius
                    accusamus error officiis atque voluptates magnam!
                  </p>
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
    </section>
  );
};

export default Testimonios;

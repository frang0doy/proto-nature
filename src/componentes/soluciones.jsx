import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importamos el archivo CSS de AOS
import { FaSolarPanel, FaSnowflake, FaWater, FaSeedling, FaRecycle, FaUsers } from 'react-icons/fa'; // Importamos los iconos de react-icons
import { useLanguage } from './LenguajeContext'; // Asegurarnos de que el contexto de idioma esté disponible

const Soluciones = () => {
  const { language } = useLanguage(); // Usamos el contexto para obtener el idioma actual

  useEffect(() => {
    // Inicializamos AOS
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Asegura que la animación solo ocurra una vez
    });

    // Hacer que las tarjetas se muevan al entrar en la página
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show'); // Agregar la clase show a cada tarjeta con un retraso
      }, index * 300); // Retrasar la aparición de cada tarjeta
    });
  }, []);

  const texts = {
    electricidad: {
      es: "Energia",
      en: "Energy"
    },
    climatizacion: {
      es: "Climatización",
      en: "Climate Control"
    },
    agua: {
      es: "Agua Potable",
      en: "Drinking Water"
    },
    alimento: {
      es: "Alimento",
      en: "Food"
    },
    residuos: {
      es: "Residuos",
      en: "Waste"
    },
   
    backElectricidad: {
      es: "Sistemas on-grid y off-grid con la posibilidad de aprovechar tanto la energía eólica como la energía solar. ¿Alguna vez imaginaste ganar dinero con la energía que generás?",
      en: "On-grid and off-grid systems with the ability to harness both wind and solar energy. Have you ever imagined earning money from the energy you generate?"
    },
    backClimatizacion: {
      es: "Hay innumerables formas de generar frío y calor de manera sustentable. ¿Un aire acondicionado, un sistema de refrigeración para un edificio entero? Tenemos la manera de concretar esa visión.",
      en: "There are countless ways to generate cold and heat sustainably. An air conditioner, a refrigeration system for an entire building? We have the way to make that vision a reality."
    },
    backAgua: {
      es: "Contamos con sistemas que garantizan el auto abastecimiento de agua potable, a medida de cualquier volumen de demanda. Tu propia fuente de agua natural.",
      en: "We offer systems that guarantee self-sufficiency in drinking water, tailored to any demand volume. Your own natural water source."
    },
    backAlimento: {
      es: "Somos los que comemos. Te acercamos una revolución en la forma de obtener alimentos 100% naturales y orgánicos. Una huerta saludable, sin necesidad de tierra, sustratos, o luz del sol.",
      en: "We are what we eat. We bring you a revolution in obtaining 100% natural and organic food. A healthy garden, without the need for soil, substrates, or sunlight."
    },
    backResiduos: {
      es: "Mediante inteligencia artificial, podés reducir el consumo innecesario, analizando lo que tirás a la basura. Tecnología disruptiva, ideal para optimizar lo que comprás.",
      en: "Using artificial intelligence, you can reduce unnecessary consumption by analyzing what you throw away. Disruptive technology, ideal for optimizing what you buy."
    },
    
  };

  return (
    <section id="solutions" className="overflow-hidden bg-gradient-to-r from-gray-300 via-gray-400 to-white py-16 pb-62">
      <div className="soluciones-container">
        <h1 className="titulo text-3xl font-bold tracking-wide" data-aos="fade-down">
          {language === 'es' ? 'Soluciones' : 'Solutions'}
        </h1>
        <h2 className="subtitulo text-2xl font-medium mt-2" data-aos="fade-down" data-aos-delay="200">
          {language === 'es' ? 'Encuentra lo que buscas' : 'Find what you are looking for'}
        </h2>
        <div className="card-container">
          <Card 
            cardNumber={1} 
            frontContent={texts.electricidad[language]} 
            backContent={texts.backElectricidad[language]} 
            delay={100} 
            Icon={<FaSolarPanel size={50} />}
          />
          <Card 
            cardNumber={2} 
            frontContent={texts.agua[language]} 
            backContent={texts.backAgua[language]} 
            delay={300} 
            Icon={<FaWater size={50} />}
          />
          <Card 
            cardNumber={3} 
            frontContent={texts.alimento[language]} 
            backContent={texts.backAlimento[language]} 
            delay={400} 
            Icon={<FaSeedling size={50} />}
          />
          <Card 
            cardNumber={4} 
            frontContent={texts.climatizacion[language]} 
            backContent={texts.backClimatizacion[language]} 
            delay={200} 
            Icon={<FaSnowflake size={50} />}
          />
          <Card 
            cardNumber={5} 
            frontContent={texts.residuos[language]} 
            backContent={texts.backResiduos[language]} 
            delay={500} 
            Icon={<FaRecycle size={50} />}
          />
         
        </div>

        {/* Estilos internos */}
        <style jsx>{`
  /* Contenedor principal */
  .soluciones-container {
    text-align: center;
    padding: 20px;
    padding-bottom: 60px; /* Espacio adicional en la parte inferior */
  }

  /* Estilos del título */
  .titulo {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  /* Estilos del subtítulo */
  .subtitulo {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  /* Contenedor de las tarjetas */
  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 tarjetas en una sola fila */
    gap: 40px;
    justify-content: center;
    margin-top: 40px;
  }

  /* Estilos individuales para las tarjetas */
  .card {
    width: 100%; /* Las tarjetas ocupan todo el espacio disponible dentro de la grilla */
    max-width: 400px; /* Limitar el ancho máximo de cada tarjeta */
    height: 250px;
    perspective: 1500px; /* Efecto 3D */
  }

  .card__inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s ease;
  }

  /* Estilos de la parte frontal y trasera de la tarjeta */
  .card__front,
  .card__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    backface-visibility: hidden;
    flex-direction: column;
  }

  .card__front {
    background-color: #f0f0f0;
  }

  .card__back {
    background-color: white;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    font-size: 1.2em;
  }

  .card__back p {
    text-align: center;
    margin: 0;
  }

  /* Efecto de voltear la tarjeta */
  .card:hover .card__inner {
    transform: rotateY(180deg);
  }

  /* RESPONSIVE: Ajustar a 1 tarjeta por fila en pantallas pequeñas */
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr; /* 1 tarjeta por fila */
      gap: 20px;
      justify-items: center;
    }

    .card-container > * {
      grid-column: auto; /* Cada tarjeta ocupa una fila entera */
    }
  }
`}</style>


      </div>
    </section>
  );
};

const Card = ({ frontContent, backContent, delay, Icon }) => (
  <div
    className="card"
    data-aos="fade-left"
    data-aos-delay={delay}
  >
    <div className="card__inner">
      <div className="card__front">
        <p>{frontContent}</p>
        <div className="icon">
          {Icon}
        </div>
      </div>
      <div className="card__back">
        <p>{backContent}</p>
      </div>
    </div>
  </div>
);

export default Soluciones;

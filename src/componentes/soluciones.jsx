import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importamos el archivo CSS de AOS
import { FaSolarPanel, FaSnowflake, FaWater, FaSeedling, FaRecycle, FaUsers } from 'react-icons/fa'; // Importamos los iconos de react-icons

const Soluciones = () => {
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

  return (
    <div className="soluciones-container">
      <h1 className="titulo text-3xl font-bold tracking-wide" data-aos="fade-down">
        Soluciones
      </h1>
      <h2 className="subtitulo text-2xl font-medium mt-2" data-aos="fade-down" data-aos-delay="200">
        Encuentra lo que buscas
      </h2>
      <div className="card-container">
        <Card 
          cardNumber={1} 
          frontContent="Electricidad" 
          backContent="Sistemas on-grid y off-grid con la posibilidad de aprovechar tanto la energía eólica como la energía solar. ¿Alguna vez imaginaste ganar dinero con la energía que generás?" 
          delay={100} 
          Icon={<FaSolarPanel size={50} />}
        />
        <Card 
          cardNumber={2} 
          frontContent="Climatizacion" 
          backContent="Hay innumerables formas de generar frío y calor de manera sustentable. ¿Un aire acondicionado, un sistema de refrigeración para un edificio entero? Tenemos la manera de concretar esa visión." 
          delay={200} 
          Icon={<FaSnowflake size={50} />}
        />
        <Card 
          cardNumber={3} 
          frontContent="Agua Potable" 
          backContent="Contamos con sistemas que garantizan el auto abastecimiento de agua potable, a medida de cualquier volumen de demanda. Tu propia fuente de agua natural." 
          delay={300} 
          Icon={<FaWater size={50} />}
        />
        <Card 
          cardNumber={4} 
          frontContent="Alimento" 
          backContent="Somos los que comemos. Te acercamos una revolución en la forma de obtener alimentos 100% naturales y orgánicos. Una huerta saludable, sin necesidad de tierra, sustratos, o luz del sol." 
          delay={400} 
          Icon={<FaSeedling size={50} />}
        />
        <Card 
          cardNumber={5} 
          frontContent="Reciduos" 
          backContent="Mediante inteligencia artificial, podés reducir el consumo innecesario, analizando lo que tirás a la basura. Tecnología disruptiva, ideal para optimizar lo que comprás." 
          delay={500} 
          Icon={<FaRecycle size={50} />}
        />
        <Card 
          cardNumber={6} 
          frontContent="Inclusion Social" 
          backContent="La energía sustentables es la mejor manera de mejorar la calidad de vida de quienes no tienen acceso (económico o geográfico) a una red tradicional. Un mundo mejor para miles de familias, hasta hoy, ignoradas." 
          delay={600} 
          Icon={<FaUsers size={50} />}
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
          grid-template-columns: repeat(3, 400px); /* 3 columnas de 400px */
          gap: 40px; /* Espacio entre tarjetas */
          justify-content: center; /* Centra las tarjetas en el contenedor */
          margin-top: 40px;
        }

        /* Estilos individuales para las tarjetas */
        .card {
          width: 400px;
          height: 250px;
          perspective: 1500px; /* Perspectiva para el efecto 3D */
        }

        .card__inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d; /* Mantener las caras en 3D */
          transition: transform 1s ease; /* Aumentamos la duración de la rotación */
        }

        /* Estilo de la parte frontal de la tarjeta */
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
          backface-visibility: hidden; /* Esconde la parte de atrás cuando está volteada */
          flex-direction: column;
        }

        .card__front {
          background-color: #f0f0f0;
        }

        /* Estilo de la parte posterior de la tarjeta */
        .card__back {
          background-color: white;
          transform: rotateY(180deg); /* Gira la parte trasera */
        }

        /* Efecto de voltear la tarjeta */
        .card:hover .card__inner {
          transform: rotateY(180deg); /* Al hacer hover, la tarjeta se voltea */
        }

        /* Animaciones cuando las tarjetas entran en pantalla */
        .card.show {
          opacity: 1;
        }

        /* Icono debajo del título */
        .card__front .icon {
          margin-top: 10px;
        }
      `}</style>
    </div>
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

import React, { useState, useEffect } from "react";
import { useLanguage } from './LenguajeContext'; // Importa el hook de LenguajeContext

export function Stats() {
  const { language } = useLanguage(); // Obtenemos el idioma actual desde el contexto

  // Definir los textos en diferentes idiomas
  const texts = {
    es: {
      title: "ALGUNOS NUMEROS EN EL MUNDO",
      subtitle: "Cuando usás energía limpia, hacés de nuestro planeta un mejor hogar.",
      cards: [
        { title: "Creación 24 Millones de Empleos", description: "Para el 2045 en el sector energético renovable" },
        { title: "1,1 Millones de Autos Eléctricos", description: "Para el 2020" },
        { title: "Hidroponia es 6 veces más eficiente por m2", description: "Que la agricultura convencional" }
      ],
      footer: "Argentina debe llegar al 20% de su matriz energética renovable para el 2025",
      currentStatus: "Actualmente cuenta sólo con el 4%"
    },
    en: {
      title: "SOME NUMBERS AROUND THE WORLD",
      subtitle: "When you use clean energy, you make our planet a better home.",
      cards: [
        { title: "Creation of 24 Million Jobs", description: "By 2045 in the renewable energy sector" },
        { title: "1.1 Million Electric Cars", description: "By 2020" },
        { title: "Hydroponics is 6 times more efficient per m2", description: "Than conventional agriculture" }
      ],
      footer: "Argentina must reach 20% of its renewable energy matrix by 2025",
      currentStatus: "Currently, it only has 4%"
    }
  };

  // Estado para manejar la activación del parallax
  const [isParallaxActive, setIsParallaxActive] = useState(false);

  // Función que escucha el evento de scroll
  const handleScroll = () => {
    // Activar el parallax solo una vez cuando se hace scroll hacia abajo
    if (window.scrollY > 100 && !isParallaxActive) {
      setIsParallaxActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isParallaxActive]);

  // Estilos
  const styles = {
    statsContainer: {
      textAlign: 'center',
      padding: '50px 20px',
      fontFamily: "'Arial', sans-serif",
      color: 'black',
      backgroundColor: 'white',
      marginBottom: '30px',
      position: 'relative',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '15px',  // Menos espacio debajo del título
      transition: 'transform 1s ease', // Mayor duración para ver mejor el efecto
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '20px',  // Espacio reducido entre título y párrafo
      transition: 'transform 1s ease',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '2rem', // Espacio entre las tarjetas
      flexWrap: 'wrap', // Para que las tarjetas se ajusten si es necesario
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '350px', // Las tarjetas siempre tienen el mismo tamaño
      height: '150px', // Altura constante para las tarjetas
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      transition: 'transform 2s ease, opacity 2s ease', // Animación más lenta
      opacity: isParallaxActive ? 1 : 0.8, // Las tarjetas se vuelven opacas solo cuando el parallax está activo
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '8px',
    },
    cardDescription: {
      fontSize: '0.875rem',
      lineHeight: '1.3',
    },
    // Efectos de deslizamiento de las tarjetas
    cardLeft: {
      transform: isParallaxActive ? `translateX(-50%)` : 'translateX(0)', // Desliza desde la izquierda
      opacity: isParallaxActive ? 1 : 0.8, // Se vuelve opaca después de la animación
    },
    cardCenter: {
      transform: 'scale(1.1) translateY(-10px)', // La tarjeta central se escala ligeramente
      opacity: 1,
    },
    cardRight: {
      transform: isParallaxActive ? `translateX(50%)` : 'translateX(0)', // Desliza desde la derecha
      opacity: isParallaxActive ? 1 : 0.8, // Se vuelve opaca después de la animación
    },
    footer: {
      marginTop: '20px', // Separar más el párrafo del pie de la tarjeta
      fontSize: '1rem',
      fontWeight: 400,
      textAlign: 'center',
      paddingBottom: '30px', // Añadir más espacio debajo del pie
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-white" style={styles.statsContainer}>
      <h2 style={styles.title} className="title">{texts[language].title}</h2>
      <h4 style={styles.subtitle} className="subtitle">{texts[language].subtitle}</h4>

      <div style={styles.cardsContainer}>
        {texts[language].cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(index === 0 ? styles.cardLeft : index === 1 ? styles.cardCenter : styles.cardRight),
            }}
            className={`card-${index}`}
          >
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      <p style={styles.footer}>{texts[language].footer}</p>
      <p>{texts[language].currentStatus}</p>
    </div>
  );
}

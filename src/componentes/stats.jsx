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
      fontFamily: "'bold', ",
      color: 'black',
      backgroundColor: 'white',
      marginBottom: '30px',
      position: 'relative',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '15px',
      paddingTop: '40px', // Ajuste para el padding superior
      paddingBottom: '20px', // Igual que el padding inferior del último párrafo
      transition: 'transform 1s ease', // Mayor duración para ver mejor el efecto
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '60px',  // Aumentamos el margen inferior aquí
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
      opacity: isParallaxActive ? 1 : 0, // Se activará cuando el parallax esté activo
      transform: isParallaxActive ? 'translateX(0)' : 'translateX(-100px)', // Desliza las cartas hacia la derecha al activarse el parallax
      transition: 'transform 1s ease, opacity 1s ease', // Animación suave al entrar
      marginBottom: '40px',
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '350px',  // Las tarjetas tienen 350px de ancho
      height: '150px', // Las tarjetas tienen 150px de alto
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      opacity: 1,  // Las tarjetas son completamente visibles
      transform: 'translateY(30px)',  // Comienzan un poco abajo
      transition: 'transform 1s ease, opacity 1s ease',  // Animación de entrada más suave
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '8px',
      color: '#3A3A3A',
    },
    cardDescription: {
      fontSize: '0.875rem',
      color: '#6C6C6C',
    },
    footer: {
      marginTop: '30px',
      fontSize: '1.25rem',  // Igual que el subtítulo
      fontWeight: 600,
      textAlign: 'center',
      paddingBottom: '40px',
      color: 'black', // Ahora color negro
    },
    currentStatus: {
      fontSize: '1.25rem',  // Igual que el subtítulo
      fontWeight: 600,
      textAlign: 'center',
      paddingBottom: '40px',
      color: 'black', // Ahora color negro
      marginBottom: '20px',  // Agregar margen hacia abajo
    },
    // Efecto 3D en hover
    cardHover: {
      transition: 'transform 0.3s ease-in-out',  // Movimiento suave
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
    },
    cardHoverEffect: {
      transform: 'rotateY(10deg) rotateX(10deg)', // Giro en 3D más leve
    },
  };

  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-300 via-gray-400 to-white py-12" style={styles.statsContainer}>
      <h2 style={styles.title} className="title">{texts[language].title}</h2>
      <h4 style={styles.subtitle} className="subtitle">{texts[language].subtitle}</h4>

      <div style={styles.cardsContainer}>
        {texts[language].cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(isParallaxActive && { transform: 'translateY(0)' }) // Aplica movimiento cuando el parallax está activo
            }}
            className="card"
          >
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      <p style={styles.footer}>{texts[language].footer}</p>
      <p style={styles.currentStatus}>{texts[language].currentStatus}</p>
    </div>
  );
}

import React from "react";
import { useLanguage } from './LenguajeContext'; // Importa el hook de Lenguaje

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

  // Definición de estilos en línea
  const styles = {
    statsContainer: {
      textAlign: 'center',
      padding: '50px',
      background: 'linear-gradient(to bottom, #000000, #808080)', // De negro a gris
      fontFamily: "'Arial', sans-serif",
      color: 'white',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '30px',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '20px',
      alignItems: 'center', // Alinea las tarjetas verticalmente
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '250px', // Ancho constante
      height: '180px', // Alargadas
      textAlign: 'center',
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      opacity: 0.8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardHover: {
      transform: 'scale(1.05)',
      opacity: 1,
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    cardTitle: {
      fontSize: '1.125rem',
      fontWeight: 700,
      marginBottom: '8px',
    },
    cardDescription: {
      fontSize: '0.875rem',
      lineHeight: '1.3',
    },
  };

  // Animaciones en línea (dificultoso en estilo en línea, por lo tanto se mantiene fuera del alcance aquí)

  return (
    <div style={styles.statsContainer}>
      <h2 style={styles.title}>{texts[language].title}</h2>
      <h4 style={styles.subtitle}>{texts[language].subtitle}</h4>

      <div style={styles.cardsContainer}>
        {texts[language].cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(index === 0 ? {} : index === 1 ? { opacity: 0.7 } : {}),
            }}
            className={`card-${index}`}
          >
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      <p>{texts[language].footer}</p>
      <p>{texts[language].currentStatus}</p>
    </div>
  );
}

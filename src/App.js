import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import CardSlider from './componentes/cardslider';  
import Logo from "./componentes/logo";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nosotros from './componentes/nosotros';
import { Stats } from "./componentes/stats";
import Productos from './componentes/productos';
import Testimonios from './componentes/testimonios';
import { LanguageProvider } from './componentes/LenguajeContext'; 
import HeroSection from './componentes/herosection'; 

function App() {
  return (
    <LanguageProvider> {/* Envuelve con el proveedor de idioma */}
      <div className="App flex flex-col min-h-screen">
        <header className="App-header">
          <Header /> {/* Header con su funcionalidad */}
        </header>

        {/* Hero Section - La sección destacada en la parte superior */}
        <HeroSection /> 

        {/* Cuerpo de la aplicación */}
        <main className="flex-grow">
          <Stats />
          <Nosotros />
          <Productos />
          <Testimonios />
          <Logo />
          <CardSlider /> {/* Asegúrate de que este componente tenga suficiente espacio */}
        </main>

        {/* Pie de página */}
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;

import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Equipo from './componentes/equipo';  
import Logo from "./componentes/logo";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nosotros from './componentes/nosotros';

import Productos from './componentes/productos';

import { LanguageProvider } from './componentes/LenguajeContext'; 
import HeroSection from './componentes/herosection'; 
import Soluciones from './componentes/soluciones';

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
          <section id="nosotros">
            <Nosotros />
          </section>
          <section id="soluciones">
            <Soluciones />
          </section>
          
          <section id="productos">
            <Productos />
          </section>
         
          <section>
            <Logo />
          </section>
          <section id="equipo">
            <Equipo />
          </section>
        </main>

        {/* Pie de página */}
        <footer id="contacto" className="App-footer">
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;

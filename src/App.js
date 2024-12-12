import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import { Slider } from './componentes/slider'; // Importación con llaves
import CardSlider from './componentes/cardslider';  
import Logo from "./componentes/logo";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Bars3Icon } from '@heroicons/react/24/outline';
import Nosotros from './componentes/nosotros';
import { Stats } from "./componentes/stats";
import Productos from './componentes/productos';
import Testimonios from './componentes/testimonios';
import { LanguageProvider } from './componentes/LenguajeContext';

  // Importación del proveedor

function App() {
  return (
    <LanguageProvider> {/* Envuelve toda la aplicación con el proveedor de idioma */}
      <div className="App flex flex-col min-h-screen"> {/* flex y min-h-screen para asegurar que el footer esté al final */}
        <header className="App-header">
          <Bars3Icon className="h-6 w-6 text-gray-500" />
          <Header />
        </header>
        <main className="flex-grow">
          <Slider /> {/* Aquí está el Slider */}
          <Stats/>
          <Nosotros />
          <Productos/>
          <Testimonios/>
          <Logo />
          <CardSlider /> {/* Usa el CardSlider aquí */}
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;

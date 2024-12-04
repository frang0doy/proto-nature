import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Slider from './componentes/slider';
import CardSlider from './componentes/cardslider';  
import Logo from "./componentes/logo";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App flex flex-col min-h-screen"> {/* flex y min-h-screen para asegurar que el footer esté al final */}
      <header className="App-header">
        <Header />
      </header>
      <main className="flex-grow">
        <Slider /> {/* Aquí está el Slider */}
<<<<<<< HEAD
        <Logo/>
=======
        
>>>>>>> 89f128510a0c3eb0d2ab88b438da369c8988f190
        <CardSlider /> {/* Usa el CardSlider aquí */}
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Slider from './componentes/slider';
import CardSlider from './componentes/cardslider';  



function App() {
  return (
    <div className="App flex flex-col min-h-screen"> {/* flex y min-h-screen para asegurar que el footer esté al final */}
      <header className="App-header">
        <Header />
      </header>
      <main className="flex-grow">
        <Slider /> {/* Aquí está el Slider */}
        
        <CardSlider /> {/* Usa el CardSlider aquí */}
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

// src/App.js
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Slider from './componentes/slider'; // IMPORTA EL SLIDER AQUÍ

// Eliminar las siguientes líneas, ya que no las estás utilizando
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-col min-h-screen"> {/* flex y min-h-screen para asegurar que el footer esté al final */}
      <header className="App-header">
        <Header />
      </header>
      <main className="flex-grow">
        <Slider /> {/* Aquí está el Slider */}
        {/* Aquí iría tu contenido */}
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

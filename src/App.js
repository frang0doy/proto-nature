
import './App.css';
import './componentes/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/logo512.png" className="App-logo" alt="logo" />
        
        <p>
           <code>Estamos trabajando para usted</code>.
        </p>

      
        <a
          className="App-link"
          href="https://www.dlight.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitá nuestros productos
        </a>
      </header>
    </div>
  );
}

export default App;

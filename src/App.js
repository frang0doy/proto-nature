import './App.css';
import Header from './componentes/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> {/* Forma correcta de usar el componente */}
      </header>
    </div>
  );
}

export default App;

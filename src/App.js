import './App.css';
import HeroSection from './componentes/herosection'; 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componentes/header';
import Footer from './componentes/footer';
import Equipo from './componentes/equipo';  
import Logo from "./componentes/logo";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Empresas from './componentes/empresas';
import Dlight from './componentes/dlight';
import Hoppecke from './componentes/hoppecke';
import Source from './componentes/source';
import Longi from './componentes/longi';
import Sma from './componentes/sma';
import Halcium from './componentes/halcium';
import hidroponia from './componentes/hidroponia';
import { LanguageProvider } from './componentes/LenguajeContext'; 
import Hidroponia from './componentes/hidroponia';

function App() {
  return (
    <LanguageProvider> {/* Envuelve con el proveedor de idioma */}
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={
              <>
                <Header />
                <HeroSection />
                
                <Empresas 
                  mainImage="https://earthshotprize.org/wp-content/uploads/2024/09/DLight-Support-Hero-1920x1080_0000_IMG_3773.jpg-1024x576.jpg"
                  mainTitle="Dlight"
                  mainSubtitle=""
                  smallImages={[
                    { img: "https://eauxwell.com/wp-content/uploads/2024/04/hoppecke.jpeg", title: "HOPPECKE", subtitle: "" },
                    { img: "https://www.pv-magazine.com/wp-content/uploads/2021/04/Pic-3-1200x800.jpg", title: "LONGI", subtitle: "" },
                    { img: "https://cdn.sma.de/fileadmin/_processed_/f/b/csm_PM-SMA-US-Success_7b5dd1c45d.jpg", title: "SMA", subtitle: "" },
                    { img: "https://static.wixstatic.com/media/8a6f9d_0115a12fa644422bb31d9da08d7072ce~mv2.png/v1/fill/w_1901,h_869,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a6f9d_0115a12fa644422bb31d9da08d7072ce~mv2.png", title: "HALCIUM", subtitle: "" },
                   
                  ]}
                />
                <Logo />
                <Equipo />
                <Footer />
              </>
            } />

            {/* Nueva Página Dlight */}
            <Route path="/dlight" element={<Dlight />} />
            <Route path="/hoppecke" element={<Hoppecke />} />
            <Route path="/Source" element={<Source />} />
            <Route path="/Longi" element={<Longi />} />
            <Route path="/Sma" element={<Sma />} />
            <Route path="/Halcium" element={<Halcium />} />
            <Route path="/Hidroponia" element={<Hidroponia />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

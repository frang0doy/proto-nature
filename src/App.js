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
import { LanguageProvider } from './componentes/LenguajeContext'; 

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
                  mainSubtitle="Descubre nuestras soluciones"
                  smallImages={[
                    { img: "https://static.wixstatic.com/media/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg/v1/fill/w_1903,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a6f9d_36c9fcdc9f3b4db39438d514c7a095e6~mv2.jpg", title: "Empresa 1", subtitle: "Descripción breve" },
                    { img: "https://publish-p89503-e776635.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e77cf0ea-1f51-4b0e-b564-d1b8f382be8b/SunnyBuddy_Visual_1200x900.jpg?width=640&preferwebp=true", title: "Empresa 2", subtitle: "Descripción breve" },
                    { img: "https://source.co/cdn/shop/files/Roxi_Hydropanel_xray_1.jpg?v=1729116590&width=1920", title: "Empresa 3", subtitle: "Descripción breve" },
                    { img: "https://publish-p89503-e776635.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--eaaecf97-c646-4d17-a2a8-c0502015e5d6/SMA_Home_Energy_Solution_Store_4-3.jpg?width=640&preferwebp=true", title: "Empresa 4", subtitle: "Descripción breve" },
                  ]}
                />
                <Logo />
                <Equipo />
                <Footer />
              </>
            } />

            {/* Nueva Página Dlight */}
            <Route path="/dlight" element={<Dlight />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

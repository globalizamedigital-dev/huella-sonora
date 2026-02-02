import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhoIAccompany } from './components/WhoIAccompany';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SocialGallery } from './components/SocialGallery';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <ServicesSection />
    <WhoIAccompany />
    <SocialGallery />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<div className="pt-20"><About /></div>} />
            <Route path="/servicios" element={<div className="pt-20"><ServicesSection /></div>} />
            <Route path="/a-quien-acompano" element={<div className="pt-20"><WhoIAccompany /></div>} />
            <Route path="/contacto" element={<div className="pt-20"><Contact /></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
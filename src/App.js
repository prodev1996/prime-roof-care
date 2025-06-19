
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BeforeAfter from './pages/BeforeAfter';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from 'react-ga4';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXX");  // Replace with your GA ID
    ReactGA.send("pageview");
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </Router>
  );
}

export default App;

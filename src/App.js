// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from 'react-ga4';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // ✅ Initialize Google Analytics
    ReactGA.initialize("G-XXXXXXXX");   // ✅ your real GA ID
    ReactGA.send("pageview");

    // ✅ Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar data-aos="fade-down" />
      <Home />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  return (
    <>
      <Header />
      <Home />
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

export default App;

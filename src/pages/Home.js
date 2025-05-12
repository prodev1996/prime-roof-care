import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Gallery />
      <TestimonialsCarousel />
      <ContactForm />
    </>
  );
}
export default Home;
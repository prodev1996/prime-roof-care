import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </>
  );
}
export default Home;
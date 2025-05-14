// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactForm from '../components/ContactForm';

const Home = () => (
  <main className="page-content">
    <HeroSection />
    <AboutUs />
    <Services />
    <Gallery />
    <TestimonialsCarousel />
    <ContactForm />
  </main>
);

export default Home;

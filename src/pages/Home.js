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
    <section id="home">
      <HeroSection />
    </section>

    <section id="about">
      <AboutUs />
    </section>

    <section id="services">
      <Services />
    </section>

    <section id="gallery">
      <Gallery />
    </section>

    <section id="testimonials">
      <TestimonialsCarousel />
    </section>

    <section id="contact">
      <ContactForm />
    </section>
  </main>
);

export default Home;

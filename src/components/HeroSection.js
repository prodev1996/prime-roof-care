// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/images/roof-cleaning.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <section 
      id="home"
      className="hero" 
      style={{ backgroundImage: `url(${heroImage})` }} 
      data-aos="fade-up"
    >
      <div className="hero-overlay">
        <h1 data-aos="zoom-in" data-aos-delay="200">
          Professional Roof Cleaning Services in Adelaide
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Protect and enhance your property today.
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <a href="#services" className="btn primary">Our Services</a>
          <a href="#about" className="btn secondary">About More</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

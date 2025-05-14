// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/images/roof-cleaning.jpg';   // ✅ import from src
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <h1>Professional Roof Cleaning Services in Adelaide</h1>
        <p>Protect and enhance your property today.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn primary">Our Services</a>
          <a href="#about" className="btn secondary">About More</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

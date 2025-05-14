// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-contact-bar" data-aos="fade-down" data-aos-delay="100">
        <span>Email: info@primeroofcare.com</span>
        <span> | </span>
        <span>Call: 08 8004 6134</span>
      </div>

      {/* Main Navbar */}
      <header className="navbar" data-aos="fade-down" data-aos-delay="300">
        <div className="navbar-left">
          <img src={logo} alt="Prime Roof Care" className="navbar-logo" />
          <h1 className="company-name">Prime Roof Care</h1>
        </div>

        <nav className="navbar-links">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="services" smooth={true} duration={500}>Services</Link>
          <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
          <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          <a href="#quote" className="quote-button">Get a Free Quote</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

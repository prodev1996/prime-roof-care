// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

function Header() {
  return (
    <>
      <div className="top-contact-bar">
        <span>Email: info@primeroofcare.com</span>
        <span> | </span>
        <span>Call: 08 8004 6134</span>
      </div>

      <header className="main-header">
        <div className="header-left">
          <img src={logo} alt="Prime Roof Care Logo" className="header-logo" />
          <h1 className="company-name">Prime Roof Care</h1>
        </div>

        <nav className="nav-links">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="services" smooth={true} duration={500}>Services</Link>
          <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;

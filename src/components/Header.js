// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
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
  );
};

export default Header;

// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);    // ✅ fixed

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className="top-contact-bar">
                <span>Email: info@primeroofcare.com</span>
                <span> | </span>
                <span>Call: 08 8004 6134</span>
            </div>

            {/* Main Navbar */}
            <header className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="Prime Roof Care" className="navbar-logo" />
                    <h1 className="company-name">Prime Roof Care</h1>
                </div>

                <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="home" smooth duration={500} onClick={closeMenu}>Home</Link>
                    <Link to="about" smooth duration={500} onClick={closeMenu}>About</Link>
                    <Link to="services" smooth duration={500} onClick={closeMenu}>Services</Link>
                    <Link to="gallery" smooth duration={500} onClick={closeMenu}>Gallery</Link>
                    <Link to="testimonials" smooth duration={500} onClick={closeMenu}>Testimonials</Link>
                    <Link to="contact" smooth duration={500} onClick={closeMenu}>Contact</Link>
                    <a href="#quote" className="quote-button" onClick={closeMenu}>Get a Free Quote</a>
                </nav>

                {/* Hamburger Icon */}
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </header>
        </>
    );
};

export default Navbar;

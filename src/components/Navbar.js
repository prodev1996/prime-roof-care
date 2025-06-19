import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNav = (section) => {
    if (isHome) {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 300);
    }
    closeMenu();
  };

  return (
    <>
      <div className="top-contact-bar">
        <span>Email: info@primeroofcare.com</span>
        <span> | </span>
        <span>Call: 08 8004 6134</span>
      </div>

      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Prime Roof Care" className="navbar-logo" />
          <h1 className="company-name">Prime Roof Care</h1>
        </div>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <button className="nav-button-link" onClick={() => handleNav('about')}>About</button>
          <button className="nav-button-link" onClick={() => handleNav('services')}>Services</button>
          <button className="nav-button-link" onClick={() => handleNav('gallery')}>Gallery</button>
          <NavLink to="/before-after" onClick={closeMenu}>Before & After</NavLink>
          <button className="nav-button-link" onClick={() => handleNav('testimonials')}>Testimonials</button>
          <button className="nav-button-link" onClick={() => handleNav('contact')}>Contact</button>
          <a href="#quote" className="quote-button" onClick={closeMenu}>Get a Free Quote</a>
        </nav>

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

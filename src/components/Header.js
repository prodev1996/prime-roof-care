import React from 'react';
function Header() {
  return (
    <header className="header">
      <div className="logo">Prime Roof Care</div>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
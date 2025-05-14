// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Prime Roof Care. All rights reserved.</p>
                <p>Website by <a href="https://rajiv-portfolio-delta.vercel.app" target="_blank" rel="noopener noreferrer">Rajiv</a></p>
            </div>
        </footer>
    );
};

export default Footer;

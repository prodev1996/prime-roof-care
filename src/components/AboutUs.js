// src/components/AboutUs.js
import React from 'react';
import aboutImage from '../assets/images/about-roofing.jpg';
import './AboutUs.css';

const AboutUs = () => (
    <section className="about-section" id="about" data-aos="fade-up">
        <h2>About Us</h2>
        <div className="separator"></div>
        <div className="about-container">
            <p>
                At <strong>Prime Roof Care</strong>, we have proudly protected Adelaide homes for over 15 years. 
                Our team of licensed and highly experienced roofers are dedicated to providing the highest quality roofing services with professionalism and care.
            </p>
            <p>
                Whether it’s roof leak repairs, gutter cleaning, or full roof restoration, we deliver 
                durable and affordable solutions for every home. Contact us today for a free inspection!
            </p>
            <img src={aboutImage} alt="About Prime Roof Care" className="about-image" data-aos="zoom-in" />
        </div>
    </section>
);

export default AboutUs;

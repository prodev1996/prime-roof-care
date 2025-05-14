import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/images/about-roofing.jpg';  
const AboutUs = () => (
    <section className="about" id="about">
        <h2>About Us</h2>
        <div className="about-content">
            <div className="about-text">
                <p>At Prime Roof Care, we have been protecting Adelaide homes for over 15 years. Our team of licensed and highly experienced roofers are dedicated to providing the highest quality roofing services with professionalism and care.</p>
                <p>Whether it’s roof leak repairs, gutter cleaning, or full roof restoration, we deliver durable and affordable solutions for every home. Contact us today for a free inspection!</p>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="About Prime Roof Care" />   
            </div>
        </div>
    </section>
);

export default AboutUs;

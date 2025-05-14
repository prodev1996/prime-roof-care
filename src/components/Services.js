// src/components/Services.js
import React from 'react';
import './Services.css';

const services = [
    {
        title: "Roof Cleaning",
        description: "High-pressure cleaning to remove dirt, moss, and lichen."
    },
    {
        title: "Roof Painting",
        description: "Restore color and protect with durable coatings."
    },
    {
        title: "Roof Restoration",
        description: "Full restoration to extend the life of your roof."
    },
    {
        title: "Gutter Cleaning",
        description: "Prevent damage with thorough gutter cleaning."
    },
];

const Services = () => (
    <section className="services-section" id="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="separator"></div>
        <div className="services-container">
            {services.map((service, index) => (
                <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;

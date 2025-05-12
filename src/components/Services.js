// src/components/Services.js
import React from 'react';

const services = [
  { title: 'Roof Cleaning', description: 'Professional high-pressure cleaning to remove dirt, moss, and lichen.' },
  { title: 'Roof Painting', description: 'Restore color & protect your roof with our durable coating systems.' },
  { title: 'Roof Restoration', description: 'Full restoration to extend the life of your roof and improve appearance.' },
  { title: 'Gutter Cleaning', description: 'Remove debris and prevent damage with our thorough gutter cleaning service.' }
];

const Services = () => (
  <section id="services">
    <h2>Our Services</h2>
    <div className="service-cards">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

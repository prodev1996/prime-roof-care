// src/components/TestimonialsCarousel.js
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TestimonialsCarousel.css';

const TestimonialsCarousel = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/testimonials/')
            .then(res => setTestimonials(res.data))
            .catch(err => console.error("Error fetching testimonials.", err));
    }, []);

    return (
        <section id="testimonials" data-aos="fade-up">
            <h2 className="testimonial-heading">What Our Clients Say</h2>
            <div className="carousel-container">
                {testimonials.length > 0 ? (
                    <Carousel 
                        showThumbs={false} 
                        showStatus={false} 
                        autoPlay 
                        infiniteLoop 
                        interval={4000}
                    >
                        {testimonials.map((t, index) => (
                            <div key={index}>
                                <p className="testimonial-quote">"{t.text}"</p>
                                <p className="testimonial-author">— {t.name}</p>
                                <div className="testimonial-stars" aria-hidden="true">
                                    {"★".repeat(t.rating)}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <p style={{ textAlign: 'center' }}>No testimonials available.</p>
                )}
            </div>
        </section>
    );
};

export default TestimonialsCarousel;

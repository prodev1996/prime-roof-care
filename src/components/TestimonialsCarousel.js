// src/components/TestimonialsCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TestimonialsCarousel.css';

const testimonials = [
    {
        quote: "Highly professional and reliable team. Very happy with the result.",
        author: "John, Glenelg",
        stars: 5
    },
    {
        quote: "The roof cleaning was fast and perfect. Great value for money!",
        author: "Emily, Norwood",
        stars: 5
    }
];

const TestimonialsCarousel = () => (
    <section id="testimonials">
        <h2 className="testimonial-heading">What Our Clients Say</h2>
        <div className="carousel-container">
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                autoPlay 
                infiniteLoop 
                interval={4000}
            >
                {testimonials.map((t, index) => (
                    <div key={index}>
                        <p className="testimonial-quote">"{t.quote}"</p>
                        <p className="testimonial-author">— {t.author}</p>
                        <div className="testimonial-stars" aria-hidden="true">
                            {"★".repeat(t.stars)}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    </section>
);

export default TestimonialsCarousel;

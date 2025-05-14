// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section" data-aos="fade-up">
            <h2 className="gallery-heading">Project Gallery</h2>
            <p className="gallery-subtext">See the transformation our expert team delivers for clients around Adelaide.</p>

            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src={img1} alt="Roof Before Cleaning" />
                    <p>Before</p>
                </div>
                <div className="gallery-item">
                    <img src={img2} alt="Roof After Cleaning" />
                    <p>After</p>
                </div>
                <div className="gallery-item">
                    <img src={img3} alt="Gutter Before Cleaning" />
                    <p>Before</p>
                </div>
                <div className="gallery-item">
                    <img src={img4} alt="Gutter After Cleaning" />
                    <p>After</p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

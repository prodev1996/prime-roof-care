// src/components/Gallery.js
import React, { useState } from 'react';
import roof1 from '../assets/images/roof-cleaning.jpg';
import roof2 from '../assets/images/gutter-cleaning.jpg';
import roof3 from '../assets/images/roof-restoration.jpg';
import './Gallery.css';

function Gallery() {
  const images = [
    { src: roof1, alt: 'Roof Cleaning' },
    { src: roof2, alt: 'Gutter Cleaning' },
    { src: roof3, alt: 'Roof Restoration' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <h2>Our Work Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
          <div className="caption">{selectedImage.alt}</div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => (
    <a
        href="https://wa.me/61420580897"  // replace with your number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
    >
        💬
    </a>
);

export default WhatsAppButton;

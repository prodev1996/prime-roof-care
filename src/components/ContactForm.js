// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/enquiry/', formData);
            setSuccess('Message sent successfully!');
            setError('');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setError('Server error. Please try later.');
            setSuccess('');
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
                {success && <div className="contact-success">{success}</div>}
                {error && <div className="contact-error">{error}</div>}
            </form>
        </div>
    );
}

export default ContactForm;

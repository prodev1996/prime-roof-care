// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!recaptchaValue) {
            setError('Please verify you are human.');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/enquiry/', {
                ...formData,
                recaptcha: recaptchaValue
            });
            setSuccess('Message sent successfully!');
            setError('');
            setFormData({ name: '', email: '', message: '' });
            setRecaptchaValue('');
        } catch {
            setError('Server error. Please try later.');
            setSuccess('');
        }
    };

    return (
        <section className="contact-form-section" id="contact" data-aos="fade-up">
            <h2>Contact Us</h2>
            <div className="separator"></div>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

                <ReCAPTCHA
                    sitekey="6LfRBDkrAAAAADOPift9XWU87EBHDwbAw0HTSkcl"
                    onChange={(value) => setRecaptchaValue(value)}
                />

                <button type="submit">Send Message</button>

                {success && <div className="contact-success">{success}</div>}
                {error && <div className="contact-error">{error}</div>}
            </form>
        </section>
    );
}

export default ContactForm;

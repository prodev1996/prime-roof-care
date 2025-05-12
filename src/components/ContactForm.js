import React, { useState } from 'react';
import './ContactForm.css';   // Optional: for extra styling if you want

function ContactForm() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/enquiry/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Enquiry sent! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending enquiry. Please try again.');
      }
    } catch (error) {
      setStatus('Server error. Please try later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
        <p>{status}</p>
      </form>
    </section>
  );
}

export default ContactForm;

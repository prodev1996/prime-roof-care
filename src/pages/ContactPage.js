
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <>
    <Navbar />
    <ContactForm />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </>
);

export default ContactPage;

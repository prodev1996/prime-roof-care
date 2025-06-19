
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import Services from '../components/Services';

const ServicesPage = () => (
  <>
    <Navbar />
    <Services />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </>
);

export default ServicesPage;

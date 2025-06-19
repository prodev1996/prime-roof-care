
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import AboutUs from '../components/AboutUs';

const About = () => (
  <>
    <Navbar />
    <AboutUs />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </>
);

export default About;

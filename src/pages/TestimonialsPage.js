
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const TestimonialsPage = () => (
  <>
    <Navbar />
    <TestimonialsCarousel />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </>
);

export default TestimonialsPage;

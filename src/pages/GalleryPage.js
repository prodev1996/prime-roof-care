
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import Gallery from '../components/Gallery';

const GalleryPage = () => (
  <>
    <Navbar />
    <Gallery />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </>
);

export default GalleryPage;

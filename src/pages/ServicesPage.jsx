import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServicesSection from '../components/sections/ServicesSection';
import BackToTop from '../components/ui/BackToTop';
import FloatingContact from '../components/ui/FloatingContact';

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
};

export default ServicesPage;
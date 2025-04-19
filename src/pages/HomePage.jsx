import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import BackToTop from '../components/ui/BackToTop';
import FloatingContact from '../components/ui/FloatingContact';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
};

export default HomePage;
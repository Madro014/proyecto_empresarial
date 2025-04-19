import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutSection from '../components/sections/AboutSection';
import BackToTop from '../components/ui/BackToTop';
import FloatingContact from '../components/ui/FloatingContact';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
};

export default AboutPage;
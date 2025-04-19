import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NewsSection from '../components/sections/NewsSection';
import BackToTop from '../components/ui/BackToTop';
import FloatingContact from '../components/ui/FloatingContact';

const NewsPage = () => {
  return (
    <>
      <Header />
      <main>
        <NewsSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
};

export default NewsPage;
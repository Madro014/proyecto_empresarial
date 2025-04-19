import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DocumentsSection from '../components/sections/DocumentsSection';
import BackToTop from '../components/ui/BackToTop';
import FloatingContact from '../components/ui/FloatingContact';

const DocumentationPage = () => {
  return (
    <>
      <Header />
      <main>
        <DocumentsSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
};

export default DocumentationPage;
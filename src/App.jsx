import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DocumentationPage from './pages/DocumentationPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import { UserRoleProvider } from './context/UserRoleContext';
import './assets/css/App.css';

function App() {
  return (
    <UserRoleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/documentacion" element={<DocumentationPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Router>
    </UserRoleProvider>
  );
}

export default App;

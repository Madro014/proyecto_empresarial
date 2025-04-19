import React from 'react';
import { Link } from 'react-router-dom';
import { useUserRole } from '../../context/UserRoleContext';

const HeroSection = () => {
  const { userRole } = useUserRole();

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4" data-text="Bienvenido a COONADOC">Bienvenido a COONADOC</h1>
            <p className="lead mb-4">Cooperativa Nacional Docente, comprometida con el bienestar y desarrollo de nuestros afiliados desde 1985.</p>
            
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/servicios" className="btn btn-primary btn-lg">
                Conoce nuestros servicios
              </Link>
              <Link to="/contacto" className="btn btn-outline-light btn-lg">
                Contáctanos
              </Link>
            </div>
          </div>
          
          <div className="col-lg-6 d-none d-lg-block" data-aos="fade-left">
            <div className="hero-image-container">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cooperativa COONADOC" className="img-fluid rounded-3 hero-image shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
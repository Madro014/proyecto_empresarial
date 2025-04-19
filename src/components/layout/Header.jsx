import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserRole } from '../../context/UserRoleContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { userRole, setUserRole } = useUserRole();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand ms-5" to="/">
            <img src="/images/logomelo.png" alt="COONADOC" height="90" className="me-0" />
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">QUIÉNES SOMOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">SERVICIOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentacion">DOCUMENTACIÓN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/noticias">NOTICIAS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">CONTACTO</Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link user-role-link" 
                  to={userRole === 'asociado' ? '/portal-asociado' : '/portal-invitado'}
                >
                  {userRole === 'asociado' ? 'Portal Asociado' : 'Portal Invitado'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
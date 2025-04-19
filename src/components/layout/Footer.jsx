import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="footer-title">COONADOC</h4>
            <p>Cooperativa Nacional Docente, comprometida con el bienestar y desarrollo de nuestros afiliados desde 1985.</p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4 mb-md-0">
            <h4 className="footer-title">Enlaces</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/documentacion">Documentación</Link></li>
              <li><Link to="/noticias">Noticias</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4 mb-md-0">
            <h4 className="footer-title">Servicios</h4>
            <ul className="footer-links">
              <li><Link to="/servicios#creditos">Créditos</Link></li>
              <li><Link to="/servicios#afiliacion">Afiliación</Link></li>
              <li><Link to="/servicios#seguros">Seguros</Link></li>
              <li><Link to="/servicios#convenios">Convenios</Link></li>
              <li><Link to="/servicios#bienestar">Bienestar</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt me-2"></i> Calle 123 # 45-67, Bogotá, Colombia</li>
              <li><i className="fas fa-phone me-2"></i> +57 (1) 123 4567</li>
              <li><i className="fas fa-envelope me-2"></i> info@coonadoc.co</li>
              <li><i className="fas fa-clock me-2"></i> Lun - Vie: 8:00 AM - 5:00 PM</li>
            </ul>
            <a href="https://wa.me/573123456789" className="btn btn-success mt-3 whatsapp-btn">
              <i className="fab fa-whatsapp me-2"></i> CHATEA CON NOSOTROS
            </a>
          </div>
        </div>
        
        <div className="footer-bottom mt-4 pt-4 border-top">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 COONADOC - Cooperativa Nacional Docente. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>Diseñado con <i className="fas fa-heart text-danger"></i> para nuestros afiliados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
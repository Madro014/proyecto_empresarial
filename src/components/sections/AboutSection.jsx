import React from 'react';

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="section py-5">
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-center">Quiénes Somos</h2>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h3 className="mb-4">Nuestra Historia</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">1985</div>
                <p>Fundación de COONADOC por un grupo de docentes visionarios que buscaban crear una entidad de apoyo financiero para el sector educativo.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">1995</div>
                <p>Alcanzamos nuestros primeros 1,000 afiliados y expandimos nuestros servicios para incluir seguros y protección.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2005</div>
                <p>Inauguramos nuestra sede principal y comenzamos programas de capacitación financiera para docentes.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2015</div>
                <p>Celebramos 30 años de servicio con más de 5,000 afiliados y una amplia red de convenios con instituciones educativas.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Hoy</div>
                <p>Seguimos creciendo con el compromiso de brindar soluciones financieras innovadoras para la comunidad docente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="p-4 bg-light rounded mb-4">
              <h3 className="mb-3">Misión</h3>
              <p>Proporcionar soluciones financieras y sociales de alta calidad que contribuyan al bienestar y desarrollo de nuestros afiliados y sus familias, promoviendo los valores cooperativos y la solidaridad entre la comunidad docente.</p>
            </div>
            <div className="p-4 bg-light rounded mb-4">
              <h3 className="mb-3">Visión</h3>
              <p>Ser reconocidos como la cooperativa líder en el sector educativo, distinguida por la calidad de sus servicios, la innovación en sus soluciones financieras y el impacto positivo en la calidad de vida de los docentes colombianos.</p>
            </div>
            <div className="p-4 bg-light rounded">
              <h3 className="mb-3">Valores</h3>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>Solidaridad</li>
                    <li>Responsabilidad</li>
                    <li>Equidad</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Transparencia</li>
                    <li>Compromiso</li>
                    <li>Honestidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 mt-4">
          <div className="col-12 mb-5" data-aos="fade-up">
            <h3 className="section-title">Documentos Normativos</h3>
            <p>Conoce los documentos que rigen nuestra cooperativa y establecen los lineamientos para todos nuestros procesos y servicios.</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="doc-card text-center">
              <div className="doc-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h4>Estatutos COONADOC</h4>
              <p>Documento principal que establece la organización, funcionamiento y objetivos de nuestra cooperativa.</p>
              <a href="#" className="btn btn-outline-primary mt-3">Descargar PDF</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="doc-card text-center">
              <div className="doc-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h4>Reglamento Interno</h4>
              <p>Normas que regulan la relación de la cooperativa con sus afiliados y el funcionamiento interno.</p>
              <a href="#" className="btn btn-outline-primary mt-3">Descargar PDF</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="doc-card text-center">
              <div className="doc-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h4>Código de Ética</h4>
              <p>Principios éticos que guían nuestras acciones y decisiones en la cooperativa.</p>
              <a href="#" className="btn btn-outline-primary mt-3">Descargar PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
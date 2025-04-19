import React from 'react';

const DocumentsSection = () => {
  return (
    <section id="documentacion" className="section py-5">
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-center">Documentación</h2>
            <p className="lead">Accede a todos los documentos y formatos necesarios para tus trámites con COONADOC.</p>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-alt fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Formularios de Afiliación</h4>
                <p className="card-text">Documentos necesarios para iniciar tu proceso de afiliación a COONADOC.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-invoice-dollar fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Solicitudes de Crédito</h4>
                <p className="card-text">Formatos para solicitar nuestras diferentes líneas de crédito.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-contract fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Estatutos y Reglamentos</h4>
                <p className="card-text">Documentos que rigen el funcionamiento de nuestra cooperativa.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-medical fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Seguros y Auxilios</h4>
                <p className="card-text">Información sobre nuestros planes de seguros y solicitudes de auxilios.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-calculator fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Estados Financieros</h4>
                <p className="card-text">Reportes financieros anuales y trimestrales de la cooperativa.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-question-circle fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Preguntas Frecuentes</h4>
                <p className="card-text">Respuestas a las dudas más comunes sobre nuestros servicios.</p>
                <a href="#" className="btn btn-outline-primary">Consultar</a>
              </div>
            </div>
          </div>
          
          {/* Agregamos las dos tarjetas faltantes */}
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-signature fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Formularios de Actualización</h4>
                <p className="card-text">Documentos para actualizar tus datos personales y financieros.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 doc-card">
              <div className="card-body">
                <div className="icon-box mb-3">
                  <i className="fas fa-file-pdf fa-2x text-primary"></i>
                </div>
                <h4 className="card-title">Informes Anuales</h4>
                <p className="card-text">Informes de gestión y resultados de la cooperativa.</p>
                <a href="#" className="btn btn-outline-primary">Descargar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
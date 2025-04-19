import React from 'react';

const NewsSection = () => {
  return (
    <section id="noticias-blog" className="section py-5">
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-center">Noticias y Eventos</h2>
            <p className="lead">Mantente informado sobre las últimas novedades, eventos y actividades de COONADOC.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card news-card h-100">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Noticia" />
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">Noticia</span>
                    <h4 className="card-title">Nuevas líneas de crédito para educación</h4>
                    <p className="card-text">Lanzamos nuevas líneas de crédito con tasas preferenciales para apoyar la educación de nuestros afiliados y sus familias.</p>
                    <p className="card-text"><small className="text-muted">Publicado el 15 de marzo, 2023</small></p>
                    <a href="#" className="btn btn-outline-primary">Leer más</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card news-card h-100">
                  <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Evento" />
                  <div className="card-body">
                    <span className="badge bg-success mb-2">Evento</span>
                    <h4 className="card-title">Asamblea General Ordinaria 2023</h4>
                    <p className="card-text">Te invitamos a participar en nuestra Asamblea General Ordinaria donde presentaremos los resultados del año anterior.</p>
                    <p className="card-text"><small className="text-muted">Publicado el 28 de febrero, 2023</small></p>
                    <a href="#" className="btn btn-outline-primary">Leer más</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card news-card h-100">
                  <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Capacitación" />
                  <div className="card-body">
                    <span className="badge bg-info mb-2">Capacitación</span>
                    <h4 className="card-title">Taller de Educación Financiera</h4>
                    <p className="card-text">Participa en nuestro taller gratuito donde aprenderás a manejar tus finanzas personales de manera efectiva.</p>
                    <p className="card-text"><small className="text-muted">Publicado el 10 de febrero, 2023</small></p>
                    <a href="#" className="btn btn-outline-primary">Leer más</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card news-card h-100">
                  <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Importante" />
                  <div className="card-body">
                    <span className="badge bg-danger mb-2">Importante</span>
                    <h4 className="card-title">Convocatoria para elección de delegados</h4>
                    <p className="card-text">Abrimos convocatoria para la elección de delegados que representarán a los afiliados en la próxima Asamblea General Ordinaria.</p>
                    <p className="card-text"><small className="text-muted">Publicado el 5 de febrero, 2023</small></p>
                    <a href="#" className="btn btn-outline-primary">Leer más</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4" data-aos="fade-up">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Siguiente</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Categorías</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Noticias Institucionales
                    <span className="badge bg-primary rounded-pill">15</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Eventos
                    <span className="badge bg-primary rounded-pill">8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Servicios y Beneficios
                    <span className="badge bg-primary rounded-pill">12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Historias de Éxito
                    <span className="badge bg-primary rounded-pill">6</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Educación Financiera
                    <span className="badge bg-primary rounded-pill">9</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Eventos Próximos</h4>
              </div>
              <div className="card-body">
                <div className="upcoming-event mb-3 pb-3 border-bottom">
                  <div className="d-flex">
                    <div className="event-date me-3 text-center">
                      <div className="date-day bg-light rounded p-2">
                        <span className="d-block fs-4 fw-bold">25</span>
                        <span className="d-block">Abr</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Asamblea General</h5>
                      <p className="mb-1"><i className="fas fa-clock me-2"></i> 9:00 AM - 1:00 PM</p>
                      <p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i> Auditorio Principal</p>
                    </div>
                  </div>
                </div>
                <div className="upcoming-event mb-3 pb-3 border-bottom">
                  <div className="d-flex">
                    <div className="event-date me-3 text-center">
                      <div className="date-day bg-light rounded p-2">
                        <span className="d-block fs-4 fw-bold">10</span>
                        <span className="d-block">May</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Taller Financiero</h5>
                      <p className="mb-1"><i className="fas fa-clock me-2"></i> 3:00 PM - 5:00 PM</p>
                      <p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i> Sala de Capacitación</p>
                    </div>
                  </div>
                </div>
                <div className="upcoming-event">
                  <div className="d-flex">
                    <div className="event-date me-3 text-center">
                      <div className="date-day bg-light rounded p-2">
                        <span className="d-block fs-4 fw-bold">18</span>
                        <span className="d-block">May</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">Jornada de Afiliación</h5>
                      <p className="mb-1"><i className="fas fa-clock me-2"></i> 8:00 AM - 4:00 PM</p>
                      <p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i> Sede Principal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="afiliacion-servicios" className="section py-5 bg-light">
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-center">Afiliación y Servicios</h2>
            <p className="lead">Conoce los beneficios de ser parte de nuestra cooperativa y los servicios que ofrecemos para nuestros afiliados.</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Requisitos de Afiliación</h3>
              </div>
              <div className="card-body">
                <p>Para ser parte de COONADOC necesitas cumplir con los siguientes requisitos:</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Ser docente activo o pensionado
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Presentar documento de identidad
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Certificación laboral con antigüedad no menor a 3 meses
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Últimos 2 desprendibles de pago
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-3"></i>
                    Realizar el aporte inicial según estatutos
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#contacto" className="btn btn-primary">Solicitar afiliación</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card h-100">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Beneficios</h3>
              </div>
              <div className="card-body">
                <p>Al afiliarte a COONADOC disfrutarás de los siguientes beneficios:</p>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-hand-holding-usd text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Créditos con tasas preferenciales</h5>
                        <p className="small mb-0">Accede a créditos con las mejores tasas del mercado.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-piggy-bank text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Ahorro con rentabilidad</h5>
                        <p className="small mb-0">Haz crecer tu dinero con nuestros productos de ahorro.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-graduation-cap text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Auxilios educativos</h5>
                        <p className="small mb-0">Apoyo económico para tu formación y la de tu familia.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-heartbeat text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Auxilios de solidaridad</h5>
                        <p className="small mb-0">Apoyo en momentos difíciles de salud o calamidad.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-handshake text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Convenios exclusivos</h5>
                        <p className="small mb-0">Descuentos y beneficios con nuestros aliados.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="icon-box me-3">
                        <i className="fas fa-gift text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Actividades recreativas</h5>
                        <p className="small mb-0">Eventos y actividades para ti y tu familia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12 mb-5" data-aos="fade-up">
            <h3 className="section-title">Nuestros Servicios</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="icon-box mb-4">
                  <i className="fas fa-money-bill-wave fa-3x text-primary"></i>
                </div>
                <h4>Créditos</h4>
                <p>Ofrecemos diferentes líneas de crédito adaptadas a tus necesidades con tasas preferenciales y plazos flexibles.</p>
                <ul className="list-unstyled mt-3">
                  <li>Libre inversión</li>
                  <li>Educativo</li>
                  <li>Vivienda</li>
                  <li>Vehículo</li>
                  <li>Calamidad doméstica</li>
                </ul>
                <a href="#" className="btn btn-outline-primary mt-3">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="icon-box mb-4">
                  <i className="fas fa-piggy-bank fa-3x text-primary"></i>
                </div>
                <h4>Ahorro</h4>
                <p>Haz crecer tu dinero con nuestros productos de ahorro diseñados para ayudarte a cumplir tus metas financieras.</p>
                <ul className="list-unstyled mt-3">
                  <li>Ahorro a la vista</li>
                  <li>CDAT</li>
                  <li>Ahorro programado</li>
                  <li>Ahorro navideño</li>
                  <li>Ahorro vacacional</li>
                </ul>
                <a href="#" className="btn btn-outline-primary mt-3">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="icon-box mb-4">
                  <i className="fas fa-handshake fa-3x text-primary"></i>
                </div>
                <h4>Convenios</h4>
                <p>Disfruta de beneficios exclusivos con nuestras alianzas estratégicas en diferentes sectores.</p>
                <ul className="list-unstyled mt-3">
                  <li>Descuentos en universidades</li>
                  <li>Tarifas especiales en servicios de salud</li>
                  <li>Beneficios en recreación y turismo</li>
                </ul>
                <a href="#" className="btn btn-outline-primary mt-3">Ver convenios</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
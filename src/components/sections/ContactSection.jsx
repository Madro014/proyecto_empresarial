import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id.replace('contact', '').toLowerCase()]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Mostrar mensaje de éxito (puedes usar SweetAlert2 aquí)
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="section py-5 bg-light">
      <div className="container">
        <div className="row py-4">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="section-title text-center">Contacto</h2>
            <p className="lead">Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o solicitud.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contactName" className="form-label">Nombre completo</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="contactName" 
                      placeholder="Tu nombre" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contactEmail" className="form-label">Correo electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="contactEmail" 
                      placeholder="tucorreo@ejemplo.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactPhone" className="form-label">Teléfono</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="contactPhone" 
                  placeholder="Tu número de teléfono" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactSubject" className="form-label">Asunto</label>
                <select 
                  className="form-control" 
                  id="contactSubject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecciona un asunto</option>
                  <option value="Información general">Información general</option>
                  <option value="Afiliación">Afiliación</option>
                  <option value="Créditos">Créditos</option>
                  <option value="Documentos">Documentos</option>
                  <option value="PQRS">Peticiones, quejas o reclamos</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage" className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  id="contactMessage" 
                  rows="5" 
                  placeholder="Escribe tu mensaje aquí" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="privacyCheck" required />
                <label className="form-check-label" htmlFor="privacyCheck">
                  Acepto la política de privacidad y el tratamiento de mis datos personales
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Enviar mensaje</button>
            </form>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-info mb-4">
              <h3 className="mb-4">Información de Contacto</h3>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5>Dirección</h5>
                  <p>Calle 123 #45-67, Bogotá, Colombia</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5>Teléfono</h5>
                  <p>(601) 123-4567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <p>info@coonadoc.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h5>Horario de Atención</h5>
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="map-container rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789494600871!3d4.648625945246501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1654789542235!5m2!1ses!2sco" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-12 mb-4" data-aos="fade-up">
            <h3 className="section-title">Preguntas Frecuentes</h3>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-item">
              <div className="faq-question">
                ¿Cuáles son los requisitos para afiliarme a COONADOC?
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Para afiliarte a COONADOC necesitas:</p>
                <ul>
                  <li>Ser docente activo o pensionado</li>
                  <li>Presentar documento de identidad</li>
                  <li>Certificación laboral con antigüedad no menor a 3 meses</li>
                  <li>Últimos 2 desprendibles de pago</li>
                  <li>Realizar el aporte inicial según estatutos</li>
                </ul>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                ¿Qué beneficios tengo al afiliarme?
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Al afiliarte a COONADOC obtienes múltiples beneficios:</p>
                <ul>
                  <li>Acceso a créditos con tasas preferenciales</li>
                  <li>Productos de ahorro con rentabilidad competitiva</li>
                  <li>Auxilios educativos y de solidaridad</li>
                  <li>Convenios con instituciones educativas y de salud</li>
                  <li>Actividades recreativas y culturales</li>
                  <li>Capacitaciones y talleres gratuitos</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-item">
              <div className="faq-question">
                ¿Cómo puedo solicitar un crédito?
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Para solicitar un crédito debes seguir estos pasos:</p>
                <ol>
                  <li>Descargar y diligenciar el formulario de solicitud de crédito</li>
                  <li>Adjuntar los documentos requeridos según la línea de crédito</li>
                  <li>Presentar la solicitud en nuestras oficinas o enviarla por correo electrónico</li>
                  <li>Esperar la respuesta del comité de crédito (máximo 5 días hábiles)</li>
                  <li>Firmar los documentos de formalización del crédito</li>
                </ol>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                ¿Cómo puedo retirarme de la cooperativa?
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Para retirarte de COONADOC debes:</p>
                <ol>
                  <li>Estar al día con todas tus obligaciones financieras</li>
                  <li>Presentar una carta de solicitud de retiro dirigida al Consejo de Administración</li>
                  <li>Esperar la aprobación del Consejo (se reúne mensualmente)</li>
                  <li>Una vez aprobado, se realizará la devolución de tus aportes según los estatutos</li>
                </ol>
                <p>Recuerda que al retirarte pierdes todos los beneficios como asociado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
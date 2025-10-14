import React from "react";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./MoneyMinderPage.css";

function MoneyMinderPage() {
  return (
    <div className="mm-page">
      <ProjectNavbar />

      <section className="mm-details">
        <div className="mm-text">
          <h1>Money Minder</h1>
          <p className="mm-description">
            Money Minder es el proyecto final del grado de Desarrollo de
            Aplicaciones Multiplataforma, diseñado para facilitar la gestión
            financiera personal. La aplicación permite a los usuarios registrar
            sus ingresos y gastos y clasificarlos por categorías para poder
            tener seguimiento sobre su economía. Además, incluye diferentes
            gráficas para ser más visual y sencillo a la hora de ver la
            trayectoria del usuario. <br /> Este proyecto tiene 3 versiones:
          </p>

          <ul className="mm-version-list">
            <li>Normal</li>
            <li>Con seguridad</li>
            <li>Con seguridad (SpringSecurity)</li>
          </ul>

          <div className="mm-buttons">
            <div className="mm-column">
              <h4>Normal</h4>
              <a
                href="https://github.com/raulgar19/MoneyMinderApp"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Frontend
              </a>
              <a
                href="https://github.com/raulgar19/MoneyMinderService"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Backend
              </a>
            </div>

            <div className="mm-column">
              <h4>Seguridad</h4>
              <a
                href="https://github.com/raulgar19/MoneyMinderAppWithSecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Frontend
              </a>
              <a
                href="https://github.com/raulgar19/MoneyMinderServiceWithSecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Backend
              </a>
            </div>

            <div className="mm-column">
              <h4>SpringSecurity</h4>
              <a
                href="https://github.com/raulgar19/MoneyMinderAppWithSpringSecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Frontend
              </a>
              <a
                href="https://github.com/raulgar19/MoneyMinderServiceWithSpringSecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Backend
              </a>
            </div>

            <div className="mm-column">
              <h4>Documentación</h4>
              <a
                href="/docs/moneyminder/memoria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Memoria
              </a>
              <a
                href="/docs/moneyminder/manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                Manual
              </a>
            </div>
          </div>
        </div>

        <div className="mm-video">
          <video controls autoPlay loop muted>
            <source src="/money-minder.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MoneyMinderPage;

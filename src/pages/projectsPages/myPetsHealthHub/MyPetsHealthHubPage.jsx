import React from "react";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./MyPetsHealthHubPage.css";

function MyPetsHealthHubPage() {
  return (
    <div className="mphh-page">
      <ProjectNavbar />

      <section className="mphh-details">
        <div className="mphh-text">
          <h1>My Pet's Health Hub</h1>
          <p className="mphh-description">
            My Pet’s Health Hub es una plataforma pensada para facilitar el
            cuidado y la gestión de la salud de las mascotas. Desde ella, los
            dueños pueden registrar información sobre sus animales, guardar
            historiales médicos, controlar vacunas, medicamentos y próximas
            visitas al veterinario.
            <br />
            <br />
            Los veterinarios también pueden acceder fácilmente a los datos de
            cada mascota, organizar citas, revisar historiales y mantener todo
            en orden en un solo lugar.
          </p>

          {/* 🎥 Video de demostración */}
          <div className="mphh-video">
            <video autoPlay loop muted playsInline>
              <source src="/mphh-video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>

          {/* 📘 Párrafo movido debajo del video */}
          <p className="mphh-description">
            El proyecto se compone de tres partes principales que trabajan
            juntas para ofrecer una experiencia completa y sencilla tanto para
            dueños como para veterinarios.
          </p>

          {/* 🧱 Sección en columnas */}
          <div className="mphh-columns">
            {/* Columna 1 - Web */}
            <div className="mphh-column">
              <h2>Web</h2>
              <p>
                Es la página principal desde donde los usuarios pueden gestionar
                toda la información de sus mascotas de forma cómoda y visual
                desde el navegador.
              </p>

              {/* Botones */}
              <div className="mphh-column-buttons">
                <a
                  href="https://mypetshealthhub.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mphh-btn"
                >
                  Ver Web
                </a>
                <a
                  href="https://github.com/raulgar19/MyPetsHealthHubWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mphh-btn"
                >
                  Repositorio Web
                </a>
              </div>
            </div>

            {/* Columna 2 - Aplicación */}
            <div className="mphh-column">
              <h2>Aplicación</h2>
              <p>
                Versión móvil y web de la plataforma, pensada para acceder desde
                el teléfono o navegador, con una experiencia sencilla y rápida
                para los dueños y veterinarios.
              </p>

              {/* Botones */}
              <div className="mphh-column-buttons">
                <a
                  href="https://my-pets-health-hub--50u6ech80q.expo.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mphh-btn"
                >
                  Ver app en navegador
                </a>
                <a
                  href="https://github.com/raulgar19/MyPetsHealthHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mphh-btn"
                >
                  Repositorio App / APK
                </a>
              </div>
            </div>

            {/* Columna 3 - Servidor */}
            <div className="mphh-column">
              <h2>Servidor</h2>
              <p>
                Es el sistema que conecta las versiones web y móvil, gestionando
                los datos y garantizando la seguridad de la información de cada
                usuario y mascota.
              </p>

              {/* Botón */}
              <div className="mphh-column-buttons">
                <a
                  href="https://github.com/raulgar19/MyPetsHealthHubAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mphh-btn"
                >
                  Repositorio Servidor
                </a>
              </div>
            </div>
          </div>

          {/* 📄 Botón de documentación debajo de las tres secciones */}
          <div className="mphh-doc">
            <a
              href="/docs/mypetshealthhub/memoria.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mphh-btn"
            >
              Documentación
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyPetsHealthHubPage;

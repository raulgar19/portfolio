import React from "react";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./EchoPlayPage.css";

function EchoPlayPage() {
  return (
    <div className="echoplaypage">
      <ProjectNavbar />

      <main className="echoplaypage-content">
        {/* Encabezado y descripción */}
        <section className="echoplaypage-header">
          <h1>Echo Play</h1>
          <p>
            <strong>Echo Play</strong> es un ecosistema de aplicaciones diseñado
            para la gestión y reproducción de música dentro de una red local.
            Está compuesto por un <strong>servidor central</strong> y un total
            de <strong>tres aplicaciones cliente</strong> que se comunican con
            él.
          </p>
          <br />
          <p>
            Gracias a esta estructura modular, cada componente cumple un rol
            específico, garantizando una comunicación eficiente y una
            experiencia fluida tanto en escritorio como en dispositivos móviles.
          </p>
        </section>

        {/* Sección de imágenes */}
        <section className="echoplaypage-images">
          <div className="echoplay-images-container">
            <img
              style={{ width: 215 }}
              className="side-image app-image"
              src="/echoplay-app.png"
              alt="Echo Play App"
            />
            <img
              className="center-image"
              src="/echoplay-upload.png"
              alt="Echo Play Upload"
            />
            <img
              className="side-image"
              src="/echoplay-manager.png"
              alt="Echo Play Manager"
            />
          </div>
        </section>

        {/* Columnas */}
        <section className="echoplaypage-columns">
          {/* Kotlin App */}
          <div className="echoplay-column">
            <h2>App Kotlin</h2>
            <p>
              Aplicación Android desarrollada en Kotlin que actúa como el
              reproductor principal, conectándose al servidor para transmitir
              las canciones disponibles.
            </p>
            <div className="echoplay-buttons">
              <a
                className="echoplay-btn"
                href="https://github.com/raulgar19/EchoPlayFrontend"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio / APK
              </a>
            </div>
          </div>

          {/* Upload */}
          <div className="echoplay-column">
            <h2>Echo Play Upload</h2>
            <p>
              Aplicación de escritorio en C# que permite subir canciones y
              carátulas al servidor desde un equipo local, manteniendo la
              biblioteca musical actualizada y organizada.
            </p>
            <div className="echoplay-buttons">
              <a
                className="echoplay-btn"
                href="https://github.com/raulgar19/EchoPlayUploader"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio / ZIP
              </a>
            </div>
          </div>

          {/* Manager */}
          <div className="echoplay-column">
            <h2>Echo Play Manager</h2>
            <p>
              Aplicación administrativa en C# para la gestión del servidor,
              usuarios y listas de reproducción, ofreciendo control total sobre
              el entorno musical.
            </p>
            <div className="echoplay-buttons">
              <a
                className="echoplay-btn"
                href="https://github.com/raulgar19/EchoPlayManager"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio / ZIP
              </a>
            </div>
          </div>

          {/* Servidor */}
          <div className="echoplay-column">
            <h2>Servidor</h2>
            <p>
              Servidor desarrollado en Express que aloja las pistas de audio,
              carátulas, imágenes, apks y expone los endpoints REST necesarios
              para la reproducción y gestión de archivos. Es accesible desde
              cualquier dispositivo con conexión a Internet.
            </p>
            <div className="echoplay-buttons">
              <a
                className="echoplay-btn"
                href="https://github.com/raulgar19/EchoPlayBackend"
                target="_blank"
                rel="noreferrer"
              >
                Repositorio
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default EchoPlayPage;

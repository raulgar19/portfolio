import React from "react";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./UndeadHuntPage.css";

function UndeadHuntPage() {
  return (
    <div className="uh-page">
      <ProjectNavbar />

      <section className="uh-details">
        <div className="uh-text">
          <h1>Undead Hunt</h1>
          <p className="uh-description">
            <strong>Undead Hunt</strong> es un videojuego desarrollado como
            proyecto final del curso de Desarrollo de Videojuegos y Realidad
            Virtual. Inspirado en el modo zombies de la saga{" "}
            <em>Call of Duty</em>, este título combina acción intensa con una
            ambientación oscura y desafiante.
            <br />
            <br />
            El jugador debe sobrevivir a oleadas infinitas de enemigos,
            mejorando sus habilidades y estrategias con cada ronda. Desarrollado
            con <strong>Unity</strong> y <strong>C#</strong>, el juego integra
            sistemas de IA, generación de oleadas, puntuación y niveles de la
            Asset Store, junto con un acabado cinematográfico mediante vídeos
            editados manualmente.
            <br />
            <br />A continuación se muestra el tráiler del videojuego, junto con
            su documentación, el proyecto y la versión compilada del mismo.
          </p>

          <div className="uh-video">
            <iframe
              src="https://drive.google.com/file/d/1yWLk210XMfLWtvoTJaf7qGbcP5yOxJEC/preview"
              title="Undead Hunt Trailler"
              width="640"
              height="360"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

          <div className="uh-buttons">
            <a
              href="https://drive.google.com/file/d/10riAeF8hr1Ykz9LUNr3FuEaId9Storch/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
            >
              Proyecto
            </a>
            <a
              href="https://drive.google.com/file/d/1yGrErX1n8aHhcNk8iCiwDuF3ifL5lQvI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
            >
              Versión compilada
            </a>
            <a
              href="/docs/undeadhunt/undead-hunt-gdd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
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

export default UndeadHuntPage;

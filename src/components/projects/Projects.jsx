import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="money-minder.png" alt="Money Minder" />
          <h3>Money Minder</h3>
          <p>
            Proyecto TFG de Desarrollo de Aplicaciones Multiplataforma: una app
            tipo bancaria que gestiona y hace seguimiento de los diferentes
            gastos e ingresos.
          </p>
          <Link to="/project/money-minder">Más información</Link>
        </div>

        <div className="project-card">
          <img src="undead-hunt.png" alt="Undead Hunt" />
          <h3>Undead Hunt</h3>
          <p>
            Proyecto de fin de curso de Desarrollo de Videojuegos: un juego
            basado en el modo zombies de la famosa saga Call of Duty.
          </p>
          <Link to="/project/undead-hunt">Más información</Link>
        </div>

        <div className="project-card">
          <img src="my-pets-health-hub.png" alt="My Pet's Health Hub" />
          <h3>My Pet's Health Hub</h3>
          <p>
            Proyecto TFG de Desarrollo de Aplicaciones Web: una plataforma que
            gestiona mascotas, veterinarios y otras funcionalidades relacionadas
            con la salud de las mascotas.
          </p>
          <Link to="/project/my-pets-health-hub">Más información</Link>
        </div>

        <div className="project-card">
          <img src="echoplay.png" alt="EchoPlay" />
          <h3>EchoPlay</h3>
          <p>
            Proyecto de reproducción de música estilo Spotify: permite crear
            listas, reproducir canciones, y gestionar la música de manera
            interactiva.
          </p>
          <Link to="/project/echoplay">Más información</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

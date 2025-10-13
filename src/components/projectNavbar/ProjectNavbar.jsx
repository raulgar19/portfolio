import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectNavbar.css";

const ProjectNavbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="project-navbar">
      {/* Logo a la izquierda como enlace */}
      <div className="project-navbar-left">
        <Link to="/" className="project-navbar-logo-link">
          <h1 className="project-navbar-logo">{"{R}"}</h1>
        </Link>
      </div>

      {/* No hay enlaces centrados */}
      <ul className="project-navbar-links"></ul>

      {/* Botón del modo totalmente a la derecha */}
      <div className="project-navbar-right">
        <button
          onClick={toggleTheme}
          className="project-theme-toggle"
          title="Cambiar tema"
        >
          {darkMode ? (
            <Sun size={22} color="gold" />
          ) : (
            <Moon size={22} color="#1e293b" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;

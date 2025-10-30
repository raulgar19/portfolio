import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ProjectNavbar.css";

const ProjectNavbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

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
          onClick={toggleLanguage}
          className="lang-toggle"
          data-lang={i18n.language}
          title="Cambiar idioma"
        >
          <div className="lang-toggle-slider">
            {i18n.language === "es" ? (
              <img src="/flags/es.png" alt="Español" className="flag-icon" />
            ) : (
              <img src="/flags/en.png" alt="English" className="flag-icon" />
            )}
          </div>
        </button>
        <button
          onClick={toggleTheme}
          className="project-theme-toggle"
          title="Cambiar tema"
        >
          <div className="project-theme-toggle-slider">
            {darkMode ? (
              <Moon size={14} color="#1e293b" />
            ) : (
              <Sun size={14} color="#f59e0b" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;

import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo-link">
          <h1 className="navbar-logo">{"{R}"}</h1>
        </a>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#projects">{t("navbar.projects")}</a>
        </li>
        <li>
          <a href="#skills">{t("navbar.skills")}</a>
        </li>
        <li>
          <a href="#certifications">{t("navbar.certifications")}</a>
        </li>
        <li>
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>

      <div className="navbar-right">
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
          className="theme-toggle"
          title="Cambiar tema"
        >
          <div className="theme-toggle-slider">
            {darkMode ? (
              <Moon size={14} color="#1e293b" />
            ) : (
              <Sun size={14} color="#f59e0b" />
            )}
          </div>
        </button>

        {/* Botón hamburguesa en móvil */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

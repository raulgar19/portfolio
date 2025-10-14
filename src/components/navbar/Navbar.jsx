import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="navbar-left">
        <a href="/" className="navbar-logo-link">
          <h1 className="navbar-logo">{"{R}"}</h1>
        </a>
      </div>

      {/* Enlaces centrados */}
      <ul className="navbar-links">
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
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>

      <div className="navbar-right">
        <button
          onClick={toggleLanguage}
          className="lang-toggle"
          title="Cambiar idioma"
        >
          {i18n.language === "es" ? (
            <img src="/flags/en.png" alt="English" className="flag-icon" />
          ) : (
            <img src="/flags/es.png" alt="Español" className="flag-icon" />
          )}
        </button>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
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

export default Navbar;

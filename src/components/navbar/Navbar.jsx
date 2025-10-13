import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

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
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#skills">Conocimientos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      {/* Botón del modo totalmente a la derecha */}
      <div className="navbar-right">
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

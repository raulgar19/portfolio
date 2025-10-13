import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Raúl García Muñoz</h1>
        <p>Desarrollador Full Stack Web y Plataforma</p>
        <div className="hero-buttons">
          <a className="hero-button" href="https://github.com/raulgar19">
            Github
          </a>
          <a
            className="hero-button"
            href="/docs/curriculum.pdf"
            download="Raul_Garcia_Munoz_CV.pdf"
          >
            CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-image.png" alt="Ilustración Hero" />
      </div>
    </section>
  );
};

export default Hero;

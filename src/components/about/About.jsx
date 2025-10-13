import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Sobre mí</h2>
        <p>
          Hola, soy <strong>Raúl García Muñoz</strong>, desarrollador Full Stack
          especializado en aplicaciones web y multiplataforma. Me apasiona crear
          soluciones funcionales y eficientes que ofrezcan una experiencia de
          usuario fluida.
        </p>
        <p>
          También he explorado el desarrollo de videojuegos con{" "}
          <strong>Unity</strong> a través de un curso intensivo, lo que me
          permitió ampliar mi perspectiva en programación y diseño de sistemas
          interactivos.
        </p>
      </div>
    </section>
  );
};

export default About;

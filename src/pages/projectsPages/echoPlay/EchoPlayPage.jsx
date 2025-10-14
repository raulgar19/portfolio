import React from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./EchoPlayPage.css";

function EchoPlayPage() {
  const { t } = useTranslation();
  const project = t("echoPlayPage", { returnObjects: true });

  return (
    <div className="echoplaypage">
      <ProjectNavbar />

      <main className="echoplaypage-content">
        {/* Encabezado y descripción */}
        <section className="echoplaypage-header">
          <h1>{project.title}</h1>
          <p>{project.description.part1}</p>
          <br />
          <p>{project.description.part2}</p>
        </section>

        {/* Sección de imágenes */}
        <section className="echoplaypage-images">
          <div className="echoplay-images-container">
            {project.images.map((img, index) => (
              <img
                key={index}
                className={img.className}
                src={img.src}
                alt={img.alt}
                style={img.style || {}}
              />
            ))}
          </div>
        </section>

        {/* Columnas */}
        <section className="echoplaypage-columns">
          {project.columns.map((col, index) => (
            <div key={index} className="echoplay-column">
              <h2>{col.title}</h2>
              <p>{col.description}</p>
              <div className="echoplay-buttons">
                {col.buttons.map((btn, i) => (
                  <a
                    key={i}
                    className="echoplay-btn"
                    href={btn.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default EchoPlayPage;

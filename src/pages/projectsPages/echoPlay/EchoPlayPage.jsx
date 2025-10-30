import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./EchoPlayPage.css";

function EchoPlayPage() {
  const { t } = useTranslation();
  const project = t("echoPlayPage", { returnObjects: true });
  const [showBoot, setShowBoot] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Dots animation
    const dotsInterval = setInterval(() => {
      setShowDots((prev) => !prev);
    }, 500);

    // Hide boot screen
    setTimeout(() => {
      setShowBoot(false);
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="echoplaypage">
      {showBoot && (
        <div className="ubuntu-boot">
          <div className="ubuntu-boot-content">
            <div className="ubuntu-logo-container">
              <div className="ubuntu-logo">
                <div className="ubuntu-circle ubuntu-circle-1"></div>
                <div className="ubuntu-circle ubuntu-circle-2"></div>
                <div className="ubuntu-circle ubuntu-circle-3"></div>
                <div className="ubuntu-circle-center"></div>
              </div>
              <div className="ubuntu-text">Ubuntu</div>
            </div>
            <div className="ubuntu-loading">
              <span>Iniciando EchoPlay{showDots ? "..." : ""}</span>
            </div>
            <div className="ubuntu-progress-container">
              <div className="ubuntu-progress-bar">
                <div
                  className="ubuntu-progress-fill"
                  style={{ width: `${bootProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
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

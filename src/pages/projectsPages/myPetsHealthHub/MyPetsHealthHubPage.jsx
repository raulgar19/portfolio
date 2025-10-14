import React from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./MyPetsHealthHubPage.css";

function MyPetsHealthHubPage() {
  const { t } = useTranslation();
  const project = t("myPetsHealthHubPage", { returnObjects: true });

  return (
    <div className="mphh-page">
      <ProjectNavbar />

      <section className="mphh-details">
        <div className="mphh-text">
          <h1>{project.title}</h1>
          <p className="mphh-description">{project.description.part1}</p>
          <div className="mphh-video">
            <video autoPlay loop muted playsInline>
              <source src={project.video.src} type="video/mp4" />
              {project.video.fallback}
            </video>
          </div>
          <p className="mphh-description">{project.description.part2}</p>

          <div className="mphh-columns">
            {project.columns.map((col, index) => (
              <div key={index} className="mphh-column">
                <h2>{col.title}</h2>
                <p>{col.description}</p>
                <div className="mphh-column-buttons">
                  {col.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mphh-btn"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mphh-doc">
            <a
              href={project.documentation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mphh-btn"
            >
              {project.documentation.label}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyPetsHealthHubPage;

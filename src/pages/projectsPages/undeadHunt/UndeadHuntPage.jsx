import React from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./UndeadHuntPage.css";

function UndeadHuntPage() {
  const { t } = useTranslation();

  const video = t("undeadHuntPage.video", { returnObjects: true });
  const buttons = t("undeadHuntPage.buttons", { returnObjects: true });

  return (
    <div className="uh-page">
      <ProjectNavbar />

      <section className="uh-details">
        <div className="uh-text">
          <h1>{t("undeadHuntPage.title")}</h1>
          <p className="uh-description">
            <strong>{t("undeadHuntPage.title")}</strong>{" "}
            {t("undeadHuntPage.description.part1")}
            <em>Call of Duty</em>
            {t("undeadHuntPage.description.part2")}
            <br />
            <br />
            {t("undeadHuntPage.description.part3")}
            <br />
            <br />
            {t("undeadHuntPage.description.part4")}
          </p>

          <div className="uh-video">
            <iframe
              src={video.src}
              title={video.title}
              width="640"
              height="360"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

          <div className="uh-buttons">
            <a
              href={buttons.project}
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
            >
              {t("undeadHuntPage.buttons.project")}
            </a>
            <a
              href={buttons.compiled}
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
            >
              {t("undeadHuntPage.buttons.compiled")}
            </a>
            <a
              href={buttons.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="uh-btn"
            >
              {t("undeadHuntPage.buttons.documentation")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UndeadHuntPage;

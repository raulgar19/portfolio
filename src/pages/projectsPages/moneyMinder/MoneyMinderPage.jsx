import React from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./MoneyMinderPage.css";

function MoneyMinderPage() {
  const { t } = useTranslation();

  const versions = t("moneyMinderPage.versions", { returnObjects: true });
  const documentation = t("moneyMinderPage.documentation.links", {
    returnObjects: true,
  });
  const video = t("moneyMinderPage.video", { returnObjects: true });

  return (
    <div className="mm-page">
      <ProjectNavbar />

      <section className="mm-details">
        <div className="mm-text">
          <h1>{t("moneyMinderPage.title")}</h1>
          <p className="mm-description">{t("moneyMinderPage.description")}</p>
          <p>{t("moneyMinderPage.versionsTitle")}</p>

          <ul className="mm-version-list">
            {versions.map((version) => (
              <li key={version.name}>{version.name}</li>
            ))}
          </ul>

          <div className="mm-buttons">
            {versions.map((version) => (
              <div className="mm-column" key={version.name}>
                <h4>{version.name}</h4>
                <a
                  href={version.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mm-btn"
                >
                  {t("moneyMinderPage.buttons.frontend")}
                </a>
                <a
                  href={version.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mm-btn"
                >
                  {t("moneyMinderPage.buttons.backend")}
                </a>
              </div>
            ))}

            <div className="mm-column">
              <h4>{t("moneyMinderPage.documentation.title")}</h4>
              <a
                href={documentation.memory}
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                {t("moneyMinderPage.documentation.memory")}
              </a>
              <a
                href={documentation.manual}
                target="_blank"
                rel="noopener noreferrer"
                className="mm-btn"
              >
                {t("moneyMinderPage.documentation.manual")}
              </a>
            </div>
          </div>
        </div>

        <div className="mm-video">
          <video controls autoPlay loop muted>
            <source src={video.src} type="video/mp4" />
            {video.alt}
          </video>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MoneyMinderPage;

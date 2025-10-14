import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="projects-container">
      <h2>{t("projects.title")}</h2>
      <div className="projects-grid">
        {/* Money Minder */}
        <div className="project-card">
          <img src="money-minder.png" alt="Money Minder" />
          <h3>{t("projects.moneyMinder.title")}</h3>
          <p>{t("projects.moneyMinder.description")}</p>
          <Link to="/project/money-minder">{t("projects.moreInfo")}</Link>
        </div>

        {/* Undead Hunt */}
        <div className="project-card">
          <img src="undead-hunt.png" alt="Undead Hunt" />
          <h3>{t("projects.undeadHunt.title")}</h3>
          <p>{t("projects.undeadHunt.description")}</p>
          <Link to="/project/undead-hunt">{t("projects.moreInfo")}</Link>
        </div>

        {/* My Pet's Health Hub */}
        <div className="project-card">
          <img src="my-pets-health-hub.png" alt="My Pet's Health Hub" />
          <h3>{t("projects.myPetsHealthHub.title")}</h3>
          <p>{t("projects.myPetsHealthHub.description")}</p>
          <Link to="/project/my-pets-health-hub">{t("projects.moreInfo")}</Link>
        </div>

        {/* EchoPlay */}
        <div className="project-card">
          <img src="echoplay.png" alt="EchoPlay" />
          <h3>{t("projects.echoPlay.title")}</h3>
          <p>{t("projects.echoPlay.description")}</p>
          <Link to="/project/echoplay">{t("projects.moreInfo")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

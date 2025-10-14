import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>{t("about.title")}</h2>
        <p>
          <Trans i18nKey="about.paragraph1" components={{ 1: <strong /> }} />
        </p>
        <p>
          <Trans i18nKey="about.paragraph2" components={{ 1: <strong /> }} />
        </p>
      </div>
    </section>
  );
};

export default About;

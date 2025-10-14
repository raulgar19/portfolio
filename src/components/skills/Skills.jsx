import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <h2>{t("skills.title")}</h2>

      <div className="skills-columns">
        {/* Tecnologías */}
        <div className="skills-group">
          <h3>{t("skills.technologies.title")}</h3>
          <div className="skills-grid">
            {t("skills.technologies.items", { returnObjects: true }).map(
              (item, index) => (
                <div className="skill-item" key={index}>
                  <img src={item.img} alt={item.alt} style={item.style || {}} />
                  <p>{item.name}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* IDEs y Aplicaciones */}
        <div className="skills-group">
          <h3>{t("skills.ides.title")}</h3>
          <div className="skills-grid">
            {t("skills.ides.items", { returnObjects: true }).map(
              (item, index) => (
                <div className="skill-item" key={index}>
                  <img src={item.img} alt={item.alt} style={item.style || {}} />
                  <p>{item.name}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

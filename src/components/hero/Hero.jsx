import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t("hero.name")}</h1>
        <p>{t("hero.subtitle")}</p>
        <div className="hero-buttons">
          <a className="hero-button" href="https://github.com/raulgar19">
            {t("hero.github")}
          </a>
          <a
            className="hero-button"
            href="/docs/curriculum.pdf"
            download="Raul_Garcia_Munoz_CV.pdf"
          >
            {t("hero.cv")}
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-image.png" alt={t("hero.imageAlt")} />
      </div>
    </section>
  );
};

export default Hero;

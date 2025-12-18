import React from "react";
import { useTranslation } from "react-i18next";
import "./Certifications.css";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="certifications">
      <h2>{t("certifications.title")}</h2>
      <img
        src="/pl400.png"
        alt="PL-400 Certification"
        className="certification-image"
      />
    </section>
  );
};

export default Certifications;

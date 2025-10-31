import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>

      <div className="contact-info">
        <p>
          {t("email")}:{" "}
          <a href="mailto:raulgamu2003@gmail.com">raulgamu2003@gmail.com</a>
        </p>
        <p>
          {t("linkedin")}:{" "}
          <a href={t("linkedinUrl")} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/raúl-garcía-muñoz
          </a>
        </p>
        <p>
          {t("github")}:{" "}
          <a href={t("githubUrl")} target="_blank" rel="noopener noreferrer">
            github.com/raulgar19
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;

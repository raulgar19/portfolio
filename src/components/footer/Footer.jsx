import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t("copyright")}</p>
      <p className="footer-subtitle">{t("subtitle")}</p>
    </footer>
  );
}

export default Footer;

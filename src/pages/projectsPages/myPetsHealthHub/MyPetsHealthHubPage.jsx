import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProjectNavbar from "../../../components/projectNavbar/ProjectNavbar";
import Footer from "../../../components/footer/Footer";
import "./MyPetsHealthHubPage.css";

function MyPetsHealthHubPage() {
  const { t } = useTranslation();
  const project = t("myPetsHealthHubPage", { returnObjects: true });
  const [showBoot, setShowBoot] = useState(true);
  const [bootMessages, setBootMessages] = useState([]);

  const messages = [
    "Loading Linux kernel...",
    "Initializing hardware...",
    "Starting system services...",
    "Mounting filesystems...",
    "[  OK  ] Started System Logging Service",
    "[  OK  ] Started Network Manager",
    "[  OK  ] Reached target Multi-User System",
    "MyPetsHealthHub login: _",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        setBootMessages((prev) => [...prev, messages[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowBoot(false), 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mphh-page">
      {showBoot && (
        <div className="linux-boot">
          <div className="linux-boot-content">
            <div className="linux-logo">LINUX</div>
            {bootMessages.map((msg, idx) => (
              <div key={idx} className="linux-message">
                {msg}
              </div>
            ))}
          </div>
        </div>
      )}
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

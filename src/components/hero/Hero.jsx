import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  const fullName = t("hero.name");
  const fullSubtitle = t("hero.subtitle");
  const command = "whoami";

  useEffect(() => {
    let commandIndex = 0;
    let nameIndex = 0;
    let subtitleIndex = 0;
    let commandInterval;
    let nameInterval;
    let subtitleInterval;
    let resetTimeout;

    // Resetear estados
    setDisplayedCommand("");
    setDisplayedName("");
    setDisplayedSubtitle("");

    // 1. Animar comando "whoami"
    commandInterval = setInterval(() => {
      if (commandIndex <= command.length) {
        setDisplayedCommand(command.substring(0, commandIndex));
        commandIndex++;
      } else {
        clearInterval(commandInterval);

        // 2. Pausa breve para simular "Enter" y ejecución
        setTimeout(() => {
          // 3. Animar nombre (resultado del comando)
          nameInterval = setInterval(() => {
            if (nameIndex <= fullName.length) {
              setDisplayedName(fullName.substring(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);

              // 4. Pausa antes del subtítulo
              setTimeout(() => {
                subtitleInterval = setInterval(() => {
                  if (subtitleIndex <= fullSubtitle.length) {
                    setDisplayedSubtitle(
                      fullSubtitle.substring(0, subtitleIndex)
                    );
                    subtitleIndex++;
                  } else {
                    clearInterval(subtitleInterval);

                    // 5. Esperar 3 segundos y reiniciar
                    resetTimeout = setTimeout(() => {
                      setAnimationKey((prev) => prev + 1);
                    }, 3000);
                  }
                }, 50);
              }, 200);
            }
          }, 80);
        }, 500);
      }
    }, 150);

    return () => {
      clearInterval(commandInterval);
      clearInterval(nameInterval);
      clearInterval(subtitleInterval);
      clearTimeout(resetTimeout);
    };
  }, [animationKey, fullName, fullSubtitle]);

  // Cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="terminal-buttons">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
            </div>
            <div className="terminal-title">raulgar19@portfolio: ~</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-header">
              <span className="terminal-prompt">raulgar19@portfolio:~$</span>
              <span className="terminal-command">
                {displayedCommand}
                {displayedCommand.length < command.length && showCursor && (
                  <span className="cursor">|</span>
                )}
              </span>
            </div>
            <h1 className="terminal-output">
              {displayedCommand.length === command.length && (
                <>
                  {displayedName}
                  {displayedName.length < fullName.length && showCursor && (
                    <span className="cursor">|</span>
                  )}
                </>
              )}
            </h1>
            <p className="terminal-subtitle">
              {displayedName.length === fullName.length && (
                <>
                  <span className="terminal-prompt-small">{">"}</span>{" "}
                  {displayedSubtitle}
                  {displayedSubtitle.length < fullSubtitle.length &&
                    showCursor && <span className="cursor">|</span>}
                </>
              )}
            </p>
          </div>
        </div>
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

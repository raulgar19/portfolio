import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <p>
        Puedes ponerte en contacto conmigo a través de los siguientes medios:
      </p>

      <div className="contact-info">
        <p>Email: raulgamu2003@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/raúl-garcía-muñoz-595974263"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/raúl-garcía-muñoz
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/raulgar19"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/raulgar19
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contacto() {
  return (
    <section>
      <h2>Contacto</h2>
      <p>Podés contactarme a través de mis redes o correo electrónico:</p>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/ayrton-gustavo-moreira-8178a9323" // LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>

        <a
          href="https://www.instagram.com/ayrtonmoreira22" // instagram
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>

        <a href="mailto:kinkimoreira9@gmail.com" className="btn">
          <FontAwesomeIcon icon={faEnvelope} /> Enviar Email
        </a>
      </div>
    </section>
  );
}

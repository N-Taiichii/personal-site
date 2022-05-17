import ContactForm from "../../components/ContactForm/contactForm";
import "./contact.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Contact" id="contact">
      <h1 className="contact-title">Get in Touch!</h1>
      <ContactForm />
      <div className="contact-container" data-aos="flip-up">
        <a href="https://github.com/N-Taiichii" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/noahmatsubara/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="mailto:noah.matsubara15@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
        <h1 className="phone">Phone ----- 587 896 4244</h1>
      </div>
    </div>
  );
};

export default Contact;

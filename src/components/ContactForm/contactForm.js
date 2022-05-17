import emailjs from "@emailjs/browser";
import "./contactForm.css";
import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qekqqml",
      "noahmatsubara_template",
      e.target,
      "oiLrB9pi-ZpF79fxA"
    );

    window.scrollTo(0, 0);

    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="contact-form" data-aos="fade-right">
      <form ref={form} onSubmit={sendEmail} className="contact-form-container">
        <label className="contact-form-label">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="contact-form-label">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="contact-form-label">Message</label>
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input type="submit" value="Send" className="submitbtn" />
      </form>
    </div>
  );
};

export default ContactForm;

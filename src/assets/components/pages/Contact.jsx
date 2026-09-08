import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import WebThreads from "../animations/WebThreads";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    home;
    const SERVICE_ID = "service_pt0wilp";
    const TEMPLATE_ID = "template_hlqgz28";
    const PUBLIC_KEY = "dJQ_EgGvhSFV0nufM";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatusMessage("✅ Message envoyé avec succès !");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage("❌ Erreur lors de l'envoi. Réessayez.");
          console.error("Erreur EmailJS :", error.text);
        },
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-bg">
        <WebThreads color1="#e100ff" color3="#070707" speed={0.4} />
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <h1>Me contacter</h1>
          <img src="images/contact.png" width={400} alt="Contact" />
        </div>

        <div className="contact-right">
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Votre adresse mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            {statusMessage && (
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  color: statusMessage.includes("✅") ? "#4ade80" : "#f87171",
                }}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

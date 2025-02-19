import React from "react";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="section-container">
        <div className="contact-details">
          <div className="details-container">
            <img src="/assets/email.png" alt="Email icon" className="icon" />
            <h3>Email</h3>
            <p>
              <a href="mailto:carljoseph156@gmail.com">GMAIL</a>
            </p>
          </div>
          <div className="details-container">
            <img
              src="/images/linkedin.png"
              alt="LinkedIn icon"
              className="icon"
            />
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/carljoseph156/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          <div className="details-container">
            <img src="/images/github.png" alt="GitHub icon" className="icon" />
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/carljoe156?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

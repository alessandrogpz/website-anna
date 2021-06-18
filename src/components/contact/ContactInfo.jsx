import React from "react";

import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div id="contact-container">
      <div className="contact-text-info">
        <p>Find me on</p>
      </div>

      <div id="socials-about">
        <a
          className="social-about"
          href="https://twitter.com/annalogias"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social-about"
          href="https://www.instagram.com/annalogias/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="social-about"
          href="https://vimeo.com/annapaulamatos"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-vimeo-v"></i>
        </a>
      </div>
      <div className="contact-text-info">
        <p>Or contact me here</p>
      </div>
    </div>
  );
}

export default ContactInfo;

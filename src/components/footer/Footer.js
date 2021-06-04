import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-content">
        <div id="socials">
          <a
            className="social"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            className="social"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div id="legal">
          {" "}
          <div className="legal-item">Copiright © 2021 by Ana Paula</div>
          <div className="legal-item">
            Design by{" "}
            <a
              href="https://alessandroperez.com/"
              target="_blank"
              rel="noreferrer"
            >
              Alessandro Perez
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

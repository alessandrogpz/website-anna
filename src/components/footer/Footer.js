import React from "react";
import Socials from "../socials/Socials";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-content">
        <Socials />
        <div id="legal">
          <div className="legal-item">Copiright © 2021 by Anna Matos</div>
          <div className="legal-item">
            Website design by{" "}
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

import React from "react";
import "./Socials.css";

function Socials() {
  return (
    <div>
      <div id="socials">
        <a
          className="social"
          href="https://twitter.com/annalogias"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social"
          href="https://www.instagram.com/annalogias/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="social"
          href="https://vimeo.com/annapaulamatos"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-vimeo-v"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;

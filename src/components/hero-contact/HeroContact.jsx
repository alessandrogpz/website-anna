import React from "react";
import "./HeroContact.css";

function HeroContact() {
  return (
    <div id="contact-container">
      <div className="contact-text-info">
        <p>Finde me on</p>
      </div>

      <div id="socials-about">
        <a
          className="social-about"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social-about"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="social-about"
          href="https://vimeo.com//"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-vimeo-v"></i>
        </a>
      </div>
      <div className="contact-text-info">
        <p>Or contact me here</p>
      </div>
      <div class="form-container">
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input right">
              <input type="text" required />
              <label>Subject</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input left">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="btn-lrg submit-btn">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContact;

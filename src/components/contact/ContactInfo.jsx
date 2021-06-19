import React from "react";
import Socials from "../socials/Socials";

import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div id="contact-container">
      <div className="contact-text-info">
        <p>Contacts</p>
      </div>

      <Socials className="socials-about-page" />
    </div>
  );
}

export default ContactInfo;

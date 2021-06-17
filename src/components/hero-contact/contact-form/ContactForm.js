import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hpe07ac",
        "template_1saqbon",
        e.target,
        "user_ypfIkHaMx3YcpsVILksZw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={sendEmail} class="form-container">
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required name="name" />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input right">
              <input type="text" required name="subject" />
              <label>Subject</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input left">
              <input type="text" required name="email" />
              <label>Email</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required name="message"></textarea>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <input
              type="submit"
              className="btn-lrg submit-btn"
              value="Submit"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

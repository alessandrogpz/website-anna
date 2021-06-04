import React from "react";
import "./HeroContact.css";

function HeroContact() {
  return (
    <div>
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

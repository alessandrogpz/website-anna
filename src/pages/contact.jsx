import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactInfo />
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;

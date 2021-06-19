import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/ContactForm";

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

import React from "react";

import HeroContact from "../components/hero-contact/HeroContact";
import Form from "../components/hero-contact/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <Form />
      <Footer />
    </div>
  );
}
export default Contact;

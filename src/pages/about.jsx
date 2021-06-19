import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import AboutMain from "../components/about/AboutMain";

import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <AboutMain />
      <Footer />
    </div>
  );
}

export default About;

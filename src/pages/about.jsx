import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HeroAbout from "../components/hero-about/HeroAbout";

import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Footer />
    </div>
  );
}

export default About;

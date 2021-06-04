import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <Navbar />
      <h1>Projects</h1>
      <Footer />
    </div>
  );
}

export default Projects;

import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default MainPage;

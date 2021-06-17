import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/scroll-to-top-button/ScrollTopButton";

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

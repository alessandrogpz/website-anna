import React from "react";
import GalleryContainer from "../components/hero-section/GalleryContainer";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/scroll-to-top-button/ScrollTopButton";

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <GalleryContainer />
      <Footer />
    </div>
  );
};

export default MainPage;

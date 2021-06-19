import React from "react";
import Headroom from "react-headroom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import GalleryContainer from "../components/gallery/GalleryContainer";

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <GalleryContainer />
      <Footer />
    </div>
  );
};

export default MainPage;

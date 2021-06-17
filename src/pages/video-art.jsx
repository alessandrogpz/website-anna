import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HeroVideoArt from "../components/hero-video-art/HeroVideoArt";

import { Link } from "react-router-dom";

function VideoArt() {
  return (
    <div>
      <Navbar />
      <HeroVideoArt />
      <Footer />
    </div>
  );
}

export default VideoArt;

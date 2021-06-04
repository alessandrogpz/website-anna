import React from "react";
import HeroVideo from "../../website-arts/src-mat/bg-video/ZeroOne.mp4";
import "./HeroSection.css";
import CardsSection from "./cards-section/CardsSection";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <CardsSection />
      <video src={""} autoPlay loop muted></video>
    </div>
  );
};

export default HeroSection;

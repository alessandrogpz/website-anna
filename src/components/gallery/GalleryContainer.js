import React from "react";
import "./GalleryContainer.css";
import CardsGallery from "./cards-gallery/CardsGallery";

const GalleryContainer = () => {
  return (
    <div className="hero-container">
      <CardsGallery />
    </div>
  );
};

export default GalleryContainer;

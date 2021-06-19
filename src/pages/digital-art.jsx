import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import NotFoundPage from "./404/404";

import { Link } from "react-router-dom";

function DigitalArt() {
  return (
    <div>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </div>
  );
}

export default DigitalArt;

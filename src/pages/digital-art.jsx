import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
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

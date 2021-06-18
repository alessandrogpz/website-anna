import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import VideoArtMain from "../components/video-art/VideoArtMain";

import { Link } from "react-router-dom";

function VideoArt() {
  return (
    <div>
      <Navbar />
      <VideoArtMain />
      <Footer />
    </div>
  );
}

export default VideoArt;

import React from "react";
import Headroom from "react-headroom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import VideoArtMain from "../components/video-art/VideoArtMain";

import { Link } from "react-router-dom";

function VideoArt() {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <VideoArtMain />
      <Footer />
    </div>
  );
}

export default VideoArt;

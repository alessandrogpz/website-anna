import React from "react";
import "./HeroVideoArt.css";
import { VideoItems } from "./VideoItems";

function HeroVideoArt() {
  return (
    <div id="all-videos-container">
      {VideoItems.map((item, index) => {
        return (
          <div className="video-title-container">
            <div key={index} className="video-container">
              <iframe
                title={item.title}
                src={item.url}
                frameborder="0"
                allowfullscreen="True"
              ></iframe>
            </div>
            <h1 className="video-title">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default HeroVideoArt;

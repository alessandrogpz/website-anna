import React from "react";
import "./HeroAbout.css";

import AboutImage from "../../website-arts/src-mat/profile/profile-bio-0.png";

const HeroAbout = () => {
  return (
    <div id="about-container">
      <div id="img-box">
        <img className="profile-img" src={AboutImage} alt="" />
      </div>
      <div id="about-text-container">
        <p className="about-text-main">
          I'm a visual artist from Brazil now based in Berlin, Germany.
        </p>
        <br />
        <p className="about-text-main">
          My work focuses mainly on the interactions between the organic and the
          virtual self, and the visual representation of complex psychological
          processes and metaphysical experiences through abstraction, symbolism,
          surrealism, and non-linear narratives.
        </p>
        <br />
        <p className="about-text-main">
          Throughout my artwork I explore the interconnection between image and
          imagination, matter and data in a transhumanist context. I'm
          interested in depicting the interactions that occur in the psyche and
          how it affects our perception of reality.
        </p>
        <br />
        <p className="about-text-main">
          The usage of techniques such as symmetrical and spontaneous patterns,
          distortion, fragmentation, and the combination of analog and digital
          tools are an essential part of my work, which results in subjects and
          themes that undergo a metamorphosis, warped figures, and dreamlike,
          surreal compositions.
        </p>
        <br />
      </div>
    </div>
  );
};

export default HeroAbout;

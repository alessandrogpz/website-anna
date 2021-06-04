import React from "react";
import "./HeroAbout.css";

import AboutImage from "../../website-arts/src-mat/profile/profile-bio-2.png";
import RuneCircle from "../../website-arts/src-mat/profile/rune-circle-white.png";
import Rune1 from "../../website-arts/src-mat/profile/rune-1.png";
import Rune2 from "../../website-arts/src-mat/profile/rune-2.png";
import Rune3 from "../../website-arts/src-mat/profile/rune-3.png";

const HeroAbout = () => {
  return (
    <div id="about-container">
      <img className="profile-img" src={AboutImage} alt="" />
      <div id="about-text-container">
        <p className="about-text-main">
          I'm a visual artist from Brazil now based in Berlin, Germany.
        </p>
        <img id="runes" className="single-runes" src={Rune1} alt="" />
        <p className="about-text-main">
          My work focuses mainly on the interactions between the organic and the
          virtual self, and the visual representation of complex psychological
          processes and metaphysical experiences through abstraction, symbolism,
          surrealism, and non-linear narratives.
        </p>
        <img id="runes" className="single-runes" src={Rune2} alt="" />
        <p className="about-text-main">
          Throughout my artwork I explore the interconnection between image and
          imagination, matter and data in a transhumanist context. I'm
          interested in depicting the interactions that occur in the psyche and
          how it affects our perception of reality.
        </p>
        <img id="runes" className="single-runes" src={Rune3} alt="" />
        <p className="about-text-main">
          The usage of techniques such as symmetrical and spontaneous patterns,
          distortion, fragmentation, and the combination of analog and digital
          tools are an essential part of my work, which results in subjects and
          themes that undergo a metamorphosis, warped figures, and dreamlike,
          surreal compositions.
        </p>
        <img id="runes" className="circle-runes" src={RuneCircle} alt="" />
      </div>
    </div>
  );
};

export default HeroAbout;

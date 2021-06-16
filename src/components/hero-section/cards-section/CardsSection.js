import React from "react";
import Card from "./cards/Card";
import CardNoText from "./cards/CardNoText";
import "./CardsSection.css";

import Image_1 from "../../../website-arts/src-mat/index/46.png";
import Image_2 from "../../../website-arts/src-mat/index/21.png";
import Image_3 from "../../../website-arts/src-mat/index/3.png";

import Image_4 from "../../../website-arts/src-mat/index/5.png";
import Image_5 from "../../../website-arts/src-mat/index/12.png";
import Image_6 from "../../../website-arts/src-mat/index/27.png";

import Image_7 from "../../../website-arts/src-mat/index/15.png";
import Image_8 from "../../../website-arts/src-mat/index/14.png";
import Image_9 from "../../../website-arts/src-mat/index/30.png";

import Image_10 from "../../../website-arts/src-mat/index/42.png";
import Image_11 from "../../../website-arts/src-mat/index/43.png";
import Image_12 from "../../../website-arts/src-mat/index/11.png";

import Image_13 from "../../../website-arts/src-mat/index/41.png";
import Image_14 from "../../../website-arts/src-mat/index/40.png";
import Image_15 from "../../../website-arts/src-mat/index/24.png";

import Image_16 from "../../../website-arts/src-mat/index/9.png";
import Image_17 from "../../../website-arts/src-mat/index/10.png";
import Image_18 from "../../../website-arts/src-mat/index/48.png";

import Image_19 from "../../../website-arts/src-mat/index/47.png";
import Image_20 from "../../../website-arts/src-mat/index/45.png";
import Image_21 from "../../../website-arts/src-mat/index/1.png";

import Image_22 from "../../../website-arts/src-mat/index/13.png";
import Image_23 from "../../../website-arts/src-mat/index/4.png";

import Image_24 from "../../../website-arts/src-mat/index/2.png";
import Image_25 from "../../../website-arts/src-mat/index/32.png";

import Image_26 from "../../../website-arts/src-mat/index/6.png";
import Image_27 from "../../../website-arts/src-mat/index/7.png";
import Image_28 from "../../../website-arts/src-mat/index/8.png";

import Image_29 from "../../../website-arts/src-mat/index/44.png";

import Image_46 from "../../../website-arts/src-mat/index/20.png";
import Image_47 from "../../../website-arts/src-mat/index/23.png";
import Image_48 from "../../../website-arts/src-mat/index/26.png";
import Image_49 from "../../../website-arts/src-mat/index/29.png";

import Image_30 from "../../../website-arts/src-mat/index/19.png";
import Image_31 from "../../../website-arts/src-mat/index/22.png";
import Image_32 from "../../../website-arts/src-mat/index/25.png";
import Image_33 from "../../../website-arts/src-mat/index/28.png";
import Image_34 from "../../../website-arts/src-mat/index/31.png";
import Image_35 from "../../../website-arts/src-mat/index/33.png";
import Image_36 from "../../../website-arts/src-mat/index/34.png";
import Image_37 from "../../../website-arts/src-mat/index/35.png";
import Image_38 from "../../../website-arts/src-mat/index/36.png";
import Image_39 from "../../../website-arts/src-mat/index/37.png";
import Image_40 from "../../../website-arts/src-mat/index/38.png";
import Image_41 from "../../../website-arts/src-mat/index/39.png";

import Image_42 from "../../../website-arts/src-mat/gifs/001.gif";
import Image_43 from "../../../website-arts/src-mat/gifs/002.gif";
import Image_44 from "../../../website-arts/src-mat/gifs/003.gif";
import Image_45 from "../../../website-arts/src-mat/gifs/004.gif";

const image_1_title = "Human Configuration,";
const image_1_text = "Digital painting and photo manipulation, 2020.";

const image_2_title = "Becoming Matter,";
const image_2_text = "Digital painting, 2020.";

const image_3_title = "Meiosis Simulation,";
const image_3_text = "Digital painting and photo manipulation, 2020.";

const image_4_title = "Organic Synthesis,";
const image_4_text = "Digital painting and photo manipulation, 2021.";

const image_5_title = "Shattered,";
const image_5_text = "Digital Collage, 2020.";

const image_6_title = "Residual self-image,";
const image_6_text = "Digital Collage and photo manipulation, 2021.";

const image_7_title = "Synthetic Division,";
const image_7_text = "Digital painting and photo manipulation, 2021.";

const image_8_title = "Source Coding,";
const image_8_text = "Digital painting and photo manipulation, 2021.";

const image_9_title = "Memory Remap,";
const image_9_text = "Digital collage and illustration, 2021.";

const image_10_title = "Correlation,";
const image_10_text = "Digital Collage, 2020.";

const image_11_title = "Dust Awaken,";
const image_11_text = "Digital Collage, 2021.";

const image_12_title = "Sharp Thoughts,";
const image_12_text = "Digital Collage, 2021.";

const image_13_title = "Assimilation,";
const image_13_text = "Digital painting , 2020.";

const image_14_title = "Amass,";
const image_14_text = "Digital painting and photo manipulation, 2020.";

const image_15_title = "Cognition,";
const image_15_text = "Digital painting, 2020.";

const image_16_title = "Shape shifting Nº1,";
const image_16_text = "Digital painting and collage, 2021.";

const image_17_title = "Shape shifting Nº2,";
const image_17_text = "Digital painting and collage, 2021.";

const image_18_title = "Human Draft,";
const image_18_text = "Digital painting and collage, 2021.";

const image_19_title = "Human Draft,";
const image_19_text = "Digital painting and collage, 2021.";

const image_20_title = "Framed Reality,";
const image_20_text = "Digital painting and collage, 2021.";

const image_21_title = "Illusion of Touch,";
const image_21_text = "Digital painting and collage, 2021.";

const image_22_title = "Shiver,";
const image_22_text = "Digital painting and photo manipulation, 2021.";

const image_23_title = "Motion,";
const image_23_text = "Digital painting and photo manipulation, 2021.";

const image_24_title = "Incêndio No.1,";
const image_24_text = "Digital painting over monoprint, 2020.";

const image_25_title = "Incêndio No.2,";
const image_25_text = "Digital painting over monoprint, 2020.";

const image_26_title = "Prisma Nº 1,";
const image_26_text = "Fractals, Digital Collage, 2020.";

const image_27_title = "Prisma Nº 2,";
const image_27_text = "Fractals, Digital Collage, 2020.";

const image_28_title = "Prisma Nº 3,";
const image_28_text = "Fractals, Digital Collage, 2020.";

const image_29_title = "Eletric Body,";
const image_29_text = "Digital collage, 2021.";

const image_30_title = "Acromatopsia,";
const image_30_text = "Fractals, Digital Processing, 2020.";

function CardsSection() {
  return (
    <div className="artgallery-container">
      <div id="section-1" className="artgallery-section-container">
        <div className="artgallery-section">
          <Card title={image_1_title} text={image_1_text} src={Image_1} />
          <Card title={image_2_title} text={image_2_text} src={Image_2} />
          <Card title={image_3_title} text={image_3_text} src={Image_3} />
        </div>
        <div className="artgallery-section">
          <Card title={image_4_title} text={image_4_text} src={Image_4} />
          <Card title={image_5_title} text={image_5_text} src={Image_5} />
          <Card title={image_6_title} text={image_6_text} src={Image_6} />
        </div>
        <div className="artgallery-section">
          <Card title={image_7_title} text={image_7_text} src={Image_7} />
          <Card title={image_8_title} text={image_8_text} src={Image_8} />
          <Card title={image_9_title} text={image_9_text} src={Image_9} />
        </div>
        <div className="artgallery-section">
          <Card title={image_10_title} text={image_10_text} src={Image_10} />
          <Card title={image_11_title} text={image_11_text} src={Image_11} />
          <Card title={image_12_title} text={image_12_text} src={Image_12} />
        </div>
        <div className="artgallery-section">
          <Card title={image_13_title} text={image_13_text} src={Image_13} />
          <Card title={image_14_title} text={image_14_text} src={Image_14} />
          <Card title={image_15_title} text={image_15_text} src={Image_15} />
        </div>
        <div className="artgallery-section">
          <Card title={image_16_title} text={image_16_text} src={Image_16} />
          <Card title={image_17_title} text={image_17_text} src={Image_17} />
          <Card title={image_18_title} text={image_18_text} src={Image_18} />
        </div>
        <div className="artgallery-section">
          <Card title={image_29_title} text={image_29_text} src={Image_29} />
          <Card title={image_20_title} text={image_20_text} src={Image_20} />
          <Card title={image_21_title} text={image_21_text} src={Image_21} />
        </div>
        <div className="artgallery-section">
          <Card title={image_19_title} text={image_19_text} src={Image_19} />
          <Card title={image_22_title} text={image_22_text} src={Image_22} />
          <Card title={image_23_title} text={image_23_text} src={Image_23} />
        </div>
        <div className="artgallery-section">
          <Card title={image_24_title} text={image_24_text} src={Image_24} />
          <Card title={image_25_title} text={image_25_text} src={Image_25} />
        </div>
        <div className="artgallery-section">
          <Card title={image_26_title} text={image_26_text} src={Image_26} />
          <Card title={image_27_title} text={image_27_text} src={Image_27} />
          <Card title={image_28_title} text={image_28_text} src={Image_28} />
        </div>
      </div>
      <div id="section-2" className="artgallery-section-container">
        <div className="artgallery-section">
          <CardNoText src={Image_46} />
          <CardNoText src={Image_47} />
        </div>
        <div className="artgallery-section">
          <CardNoText src={Image_48} />
          <Card title={image_30_title} text={image_30_text} src={Image_49} />
        </div>
      </div>
      <div id="section-3" className="artgallery-section-container">
        <div className="artgallery-section">
          <CardNoText src={Image_30} />
          <CardNoText src={Image_31} />
          <CardNoText src={Image_32} />
        </div>
        <div className="artgallery-section">
          <CardNoText src={Image_33} />
          <CardNoText src={Image_34} />
          <CardNoText src={Image_35} />
        </div>
        <div className="artgallery-section">
          <CardNoText src={Image_36} />
          <CardNoText src={Image_37} />
          <CardNoText src={Image_38} />
        </div>
        <div className="artgallery-section">
          <CardNoText src={Image_39} />
          <CardNoText src={Image_40} />
          <CardNoText src={Image_41} />
        </div>
      </div>
      <div id="section-4" className="artgallery-section-container">
        <div className="artgallery-section">
          <CardNoText src={Image_42} />
          <CardNoText src={Image_43} />
        </div>
        <div className="artgallery-section">
          <CardNoText src={Image_44} />
          <CardNoText src={Image_45} />
        </div>
      </div>
    </div>
  );
}

export default CardsSection;

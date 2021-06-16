import React from "react";
import "./Card.css";

function CardNoText(props) {
  return (
    <figure id="img-container">
      <img className="img" src={props.src} alt="" />
    </figure>
  );
}

export default CardNoText;

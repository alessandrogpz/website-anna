import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <figure id="img-container">
      <img className="card" src={props.src} alt="" />
    </figure>
  );
}

export default Card;

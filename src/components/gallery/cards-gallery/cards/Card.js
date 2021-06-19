import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <figure id="img-container">
      <img className="img" src={props.src} alt="" />
      <p id="img-text">
        <b>
          <i>{props.title}</i>
        </b>
        <br />
        {props.text}
      </p>
    </figure>
  );
}

export default Card;

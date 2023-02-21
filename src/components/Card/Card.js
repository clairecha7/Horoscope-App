import React from "react";
import "./Card.scss";

function Card(props) {
  const { date, image, desc } = props.sign;

  return (
    <div className="cards">
      <div className="date">
        <h1>{date}</h1>
      </div>
      <img src={image} />
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;

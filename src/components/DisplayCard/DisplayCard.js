//sets up the generic DisplayCard component
import React from "react";
import "./DisplayCard.css";

const DisplayCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default DisplayCard;
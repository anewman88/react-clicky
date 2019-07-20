//Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<div>
    <div className="jumbotron">
      <h1>Crystal Clicky Game!</h1>
      <h2>Click on any crystal to earn a point, but don't click on the same one more than once.</h2> 
      <h2>Click all 15 crystals, without repeating, and you win.</h2>
    </div>
	</div>
);
export default Jumbotron;
//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Click each crystal only once</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
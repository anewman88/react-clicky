//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default sticky-top justify-content-center">
              <button>Game score: {this.props.score} </button>   
              <div class="divider"/>
              <button>Top score: {this.props.topscore}</button>   
        {/* <h3>Game score: {this.props.score} | Top score: {this.props.topscore}</h3> */}
      </nav>
    );
  }
}

export default Header;
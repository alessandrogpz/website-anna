import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./nav-name-hover.css";
import "./nav-button-hover.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul id="buttons-left" className="nav-menu">
        <Link className="nav-button glitch" to="/artwork" data-text="ERROR!">
          Artwork
        </Link>
        <Link className="nav-button glitch" to="/projects" data-text="ERROR!">
          Projects
        </Link>
      </ul>

      <Link
        id="nav-name"
        className="nav-button-name glitch"
        to="/"
        data-text="ERROR!"
      >
        Anna Matos
      </Link>

      <ul id="buttons-right" className="nav-menu">
        <Link className="nav-button glitch" to="/about" data-text="ERROR!">
          About
        </Link>
        <Link className="nav-button glitch" to="/contact" data-text="ERROR!">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul id="buttons-left" className="nav-menu">
        <Link className="nav-button left" to="/artwork">
          Artwork
        </Link>
        <Link className="nav-button left" to="/projects">
          Projects
        </Link>
      </ul>

      <Link id="nav-name" to="/">
        Anna Matos
      </Link>

      <ul id="buttons-right" className="nav-menu">
        <Link className="nav-button right" to="/about">
          About
        </Link>
        <Link className="nav-button right" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

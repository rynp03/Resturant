import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <span className="nav-logo">The Slice of Spice</span>
      <div className={`nav-items ${toggle && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div
        className={`nav-toggle ${toggle && "open"}`}
        onClick={handleToggleChange}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

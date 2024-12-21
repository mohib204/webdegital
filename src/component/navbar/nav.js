import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">WEB LOGO</Link>
      </div>
      <input type="checkbox" id="toggle" className="toggle-input" />
      <label htmlFor="toggle" className="toggle-label">
        ☰
      </label>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About The Owner</Link></li>
        <li><Link to="/projects">The Plans for a Day</Link></li>
        <li><Link to="/contact">The Website Owner</Link></li>
        <li><Link to="/contact">Some Stove Iknow About</Link></li>
        
      </ul>
    </nav>
  )
};

export default Nav;
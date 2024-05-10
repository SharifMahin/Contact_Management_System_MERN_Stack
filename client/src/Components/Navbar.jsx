import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-brand">
          Contact
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/login" className="nvbar-link">
          Login
        </NavLink>
        <NavLink to="/register" className="nvbar-link">
          Register
        </NavLink>
        <NavLink to="/about" className="nvbar-link">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="" className="navbar-brand">
          Contact
        </a>
      </div>
      <div className="navbar-right">
        <a href="" className="nvbar-link">
          About
        </a>
        <a href="" className="nvbar-link">
          Login
        </a>
        <a href="" className="nvbar-link">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;

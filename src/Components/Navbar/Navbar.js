import React from 'react';
import './Navbar.css'; 
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt=''/>
        
        Maisha Mtaani</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#causes">Causes</a></li>
        <li><a href="#volunteer">Volunteer</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar-donate">Donate</button>
    </nav>
  );
};

export default Navbar;

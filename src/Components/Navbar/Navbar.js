import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">
				<div>
					<img className="logo" src={logo} alt="" />
				</div>
			</NavLink>
			<NavLink to="/">
				<ul className="navbar-links">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About Us</a>
					</li>
					<li>
						<a href="#causes">Programs</a>
					</li>
					<li>
						<a href="#volunteer">Volunteer</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</NavLink>
			<button className="navbar-donate">Donate</button>
		</nav>
	);
};

export default Navbar;

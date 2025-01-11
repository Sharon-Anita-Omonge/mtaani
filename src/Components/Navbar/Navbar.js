import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-header">
				<NavLink to="/">
					<img className="logo" src={logo} alt="Logo" />
				</NavLink>
				<button className="hamburger" onClick={toggleMenu}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>

			<div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
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
				<button className="navbar-donate">Donate</button>
			</div>
		</nav>
	);
};

export default Navbar;

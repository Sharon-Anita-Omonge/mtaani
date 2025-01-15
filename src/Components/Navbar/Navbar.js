import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Close the menu when a link is clicked
	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar container">
			<div className="navbar-header">
				<NavLink to="/">
					<img className="logo" src={logo} alt="Logo" />
				</NavLink>
				<div className="hamburger" onClick={toggleMenu}>
					☰
				</div>
			</div>

			<div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
				<ul className="navbar-links">
					<li>
						<a href="#home" onClick={handleLinkClick}>
							Home
						</a>
					</li>
					<li>
						<a href="#about" onClick={handleLinkClick}>
							About Us
						</a>
					</li>
					<li>
						<a href="#causes" onClick={handleLinkClick}>
							Programs
						</a>
					</li>
					<li>
						<a href="#volunteer" onClick={handleLinkClick}>
							Volunteer
						</a>
					</li>
					<li>
						<a href="#contact" onClick={handleLinkClick}>
							Contact
						</a>
					</li>
				</ul>
				<button className="navbar-donate" onClick={handleLinkClick}>
					Donate
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

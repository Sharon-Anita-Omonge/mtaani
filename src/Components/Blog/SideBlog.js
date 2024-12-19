import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Blog.css';

const useScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
};

const SideBlog = () => {
	useScrollToTop();

	return (
		<aside className="sidebar">
			<ul>
				<li>
					<NavLink
						to="/drugabuse"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						How Drugs Affect People's Lives
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/crime"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						The link between drug abuse and crime in Kenya
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/mental"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Mental Health and Substance Abuse
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/rehab"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Rehabilitation Over Punishment
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/education"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						The Role of Education and Community Support
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default SideBlog;

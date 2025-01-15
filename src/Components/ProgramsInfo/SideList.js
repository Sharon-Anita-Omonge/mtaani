import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Details.css';

const useScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
};

const Sidebar = () => {
	useScrollToTop();

	return (
		<aside className="sidebar">
			<ul>
				<li>
					<NavLink
						to="/awareness"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Awareness Campaigns
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/counselling"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Counseling and Support Programs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/skill"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Skill Development and Engagement
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/recovery"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Rehabilitation and Recovery Support
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/prison"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Prison Rehabilitation Programs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/climate"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Engagement for Climate Action
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;

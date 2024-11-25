import React from 'react';
import { Link } from 'react-router-dom';
import './Causes.css';
import Prisonvisit from '../../assets/prisonvisit.jpeg';
import sports from '../../assets/gallery29.jpeg';
import health from '../../assets/hero4.png';

const Causes = () => {
	return (
		<div className="causes-container">
			<div className="causes-header">
				<h1>Our Popular Programs</h1>
				<p>
					Explore the initiatives we're using to empower communities and
					transform lives.
				</p>
			</div>
			<div className="causes-grid">
				{/* Individual Program Cards */}
				<div className="program-card">
					<img src={Prisonvisit} alt="Rehabilitation" />
					<h3>Counseling and Support Programs</h3>
					<p>
						Create safe spaces where youth can share their experiences and learn
						from each other.
					</p>
					<Link to="/counselling">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={sports} alt="sports" />
					<h3> Skill Development and Engagement</h3>
					<p>
						Organize sports, arts, or music programs to keep youth engaged in
						positive pursuits.
					</p>
					<Link to="/skill">Learn More</Link>
				</div>

				<div className="program-card">
					<img src={health} alt="health" />
					<h3>Rehabilitation and Recovery Supports</h3>
					<p>
						Encourage physical activities and healthcheck to promote a healthy
						lifestyle.
					</p>
					<Link to="/programs">Learn More</Link>
				</div>
			</div>
		</div>
	);
};

export default Causes;

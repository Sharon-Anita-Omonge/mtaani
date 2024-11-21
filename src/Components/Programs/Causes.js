import React from "react";
import { Link } from "react-router-dom";
import "./Causes.css";
import Prisonfootball2 from "../../assets/Prisonfootball2.jpeg";
import kitchengarden from "../../assets/kitchengarden.jpeg";
import hero4 from "../../assets/hero4.png";
import treeplanting from "../../assets/treeplanting.jpeg";
import climatechange2 from "../../assets/climatechange2.jpeg";
import under16football2 from "../../assets/under16football2.jpeg";
import solar from "../../assets/solar.jpeg";
import community from "../../assets/community.jpeg";

const Causes = () => {
	return (
		<div className="causes-container">
			<div className="causes-header">
				<h1>Our Programs</h1>
				<p>Explore the initiatives we're using to empower communities and transform lives.</p>
			</div>
			<div className="causes-grid">
				{/* Individual Program Cards */}
				<div className="program-card">
					<img src={Prisonfootball2} alt="Rehabilitation Program" />
					<h3>Rehabilitation & Empowerment</h3>
					<p>Empowering individuals through vocational training and counseling.</p>
					<Link to="/programs/rehabilitation">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={kitchengarden} alt="Kitchen Garden Program" />
					<h3>Sustainable Kitchen-Garden</h3>
					<p>Promoting food security with fresh produce and self-sufficiency.</p>
					<Link to="/programs/kitchen-garden">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={hero4} alt="Awareness Campaigns" />
					<h3>Awareness Campaigns</h3>
					<p>Educating communities on drug abuse, crime prevention, and health.</p>
					<Link to="/programs/awareness-campaigns">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={treeplanting} alt="Tree Planting Initiative" />
					<h3>Tree-Planting Initiative</h3>
					<p>Combating climate change with a greener environment.</p>
					<Link to="/programs/tree-planting">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={climatechange2} alt="Empowerment Workshops" />
					<h3>Empowerment Workshops</h3>
					<p>Equipping youth with life skills and vocational training.</p>
					<Link to="/programs/empowerment-workshops">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={under16football2} alt="Youth Sports" />
					<h3>Youth Sports and Activities</h3>
					<p>Providing recreational outlets for talent development.</p>
					<Link to="/programs/youth-sports">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={solar} alt="Renewable Energy" />
					<h3>Renewable Energy Solutions</h3>
					<p>Adopting briquetting technology and solar power solutions.</p>
					<Link to="/programs/renewable-energy">Learn More</Link>
				</div>
				<div className="program-card">
					<img src={community} alt="Community Center" />
					<h3>Community Resource Center</h3>
					<p>Building a hub for education, training, and recreation.</p>
					<Link to="/programs/community-center">Learn More</Link>
				</div>
			</div>
		</div>
	);
};

export default Causes;

import React from 'react';
import './Details.css';
import Sidebar from './SideList';

const SkillDevelopment = () => {
	return (
		<div id="skill-development">
			<div className="prog-hero">
				<h1>Skill Development and Engagement</h1>
			</div>
			<div className="details">
				<div className="details-text container">
					<div>
						<h2>Life Skills Training</h2>
						<p>
							Our life skills training focuses on teaching youth critical
							decision-making, stress management, and communication techniques
							to navigate everyday challenges.
						</p>
						<p>
							These skills empower participants to resist peer pressure and
							build healthier relationships with those around them.
						</p>
					</div>
					<div>
						<h2>Recreational Activities</h2>
						<p>
							We organize sports tournaments, art exhibitions, and music
							workshops to provide positive outlets for creativity and
							expression.
						</p>
						<p>
							These activities foster teamwork, discipline, and self-confidence,
							keeping youth engaged in productive and enjoyable pursuits.
						</p>
					</div>
					<div>
						<h2>Job Training and Mentorship</h2>
						<p>
							We partner with businesses to offer job training programs that
							prepare participants for real-world opportunities. Mentorship
							initiatives connect them with experienced professionals who
							provide guidance and inspiration.
						</p>
						<p>
							This ensures they develop practical skills and a sense of purpose,
							reducing their vulnerability to destructive behaviors.
						</p>
					</div>
				</div>

				<div className="details-list">
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default SkillDevelopment;

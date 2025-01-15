import React from 'react';
import './Details.css';
import Sidebar from './SideList';

const ClimateAction = () => {
	return (
		<div id="climate-action">
			<div className="prog-hero">
				<h1>Engagement for Climate Action</h1>
			</div>
			<div className="details">
				<div className="details-text container">
					<div>
						<h2>Climate Education and Awareness</h2>
						<p>
							Our programs aim to educate young people about the causes and
							impacts of climate change, while also promoting sustainable
							practices and the value of caring for the environment.
						</p>
						<p>
							Through these efforts, participants gain the knowledge they need
							to make thoughtful choices, support environmentally friendly
							policies, and motivate others to take meaningful action.
						</p>
					</div>
					<div>
						<h2>Eco-Friendly Initiatives</h2>
						<p>
							We host activities like tree-planting events, community clean-ups,
							and upcycling workshops to encourage sustainable living and
							environmental responsibility.
						</p>
						<p>
							These hands-on initiatives foster creativity, teamwork, and a
							proactive approach to tackling climate challenges, helping
							participants feel more connected to protecting the planet.
						</p>
					</div>
					<div>
						<h2>Green Skills Training and Mentorship</h2>
						<p>
							In partnership with green businesses, we offer training in areas
							like renewable energy, sustainable agriculture, and eco-friendly
							technologies.
						</p>
						<p>
							Our mentorship programs pair participants with environmental
							leaders who provide guidance and inspiration, helping them build
							careers in the green economy and contribute to a more sustainable
							future.
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

export default ClimateAction;

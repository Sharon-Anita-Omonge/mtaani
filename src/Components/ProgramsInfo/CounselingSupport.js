import React from 'react';
import './Details.css';
import Sidebar from './SideList';

const CounselingSupport = () => {
	return (
		<div id="counseling-support">
			<div className="prog-hero">
				<h1>Counseling and Support Programs</h1>
			</div>
			<div className="details">
				<div className="details-text container">
					<div>
						<h2>Peer Support Groups</h2>
						<p>
							Our peer support groups are safe spaces where individuals can
							share their experiences and find encouragement. Participants learn
							from each other's journeys and gain strength to overcome their
							challenges.
						</p>
						<p>
							By connecting with peers, they develop a sense of community,
							reducing feelings of isolation often associated with drug abuse or
							crime.
						</p>
					</div>
					<div>
						<h2>Confidential Counseling Services</h2>
						<p>
							Our confidential counseling services offer a private and
							judgment-free environment for individuals to address personal
							challenges. Our professionals work with participants to create
							personalized recovery plans.
						</p>
						<p>
							These services are available both in-person and online, ensuring
							accessibility for everyone in need of support.
						</p>
					</div>
					<div>
						<h2>Educational Programs</h2>
						<p>
							Education is a powerful tool for prevention, and our programs
							focus on equipping youth with the knowledge and skills to make
							positive choices.
						</p>
						<p>
							We collaborate with schools to incorporate substance abuse and
							crime prevention into the curriculum, ensuring early intervention.
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

export default CounselingSupport;

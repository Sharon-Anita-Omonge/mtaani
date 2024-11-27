import React, { useState } from 'react';
import './About.css';
import volunteer from '../../assets/volunteer.jpeg';

const About = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	// Toggle function for collapsibles
	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="about-container">
			{/* Left: Text + Collapsible Section */}
			<div className="about-left">
				<h1 className="about-title">What we do here</h1>
				<p className="about-description">
					Maisha Mtaani’s inception in 2015 was a direct response to the urgent
					challenge of drug abuse in Kisumu County. Our founders, moved by the
					plight of the community and the escalating epidemic, envisioned an
					organization that could make a real difference.
				</p>

				<p>
					The streets of Kisumu, once vibrant with the energy of its youth, were
					dimming under the shadow of substance misuse.
				</p>

				{/* Collapsible Section */}
				<div className="collapsible-section">
					<div className="collapsible-item">
						<button
							className="collapsible-header"
							onClick={() => toggleAccordion(0)}
						>
							Why we started
						</button>
						{activeIndex === 0 && (
							<div className="collapsible-body">
								<p>
									Determined to ignite a spark of change, Maisha Mtaani became
									the embodiment of that resolve. We set out to offer not just
									aid, but a path to empowerment for those caught in the web of
									addiction.
								</p>

								<p>
									Our approach was rooted in compassion and the belief that
									every individual holds the potential for renewal and growth.
								</p>
							</div>
						)}
					</div>

					<div className="collapsible-item">
						<button
							className="collapsible-header"
							onClick={() => toggleAccordion(1)}
						>
							Mission
						</button>
						{activeIndex === 1 && (
							<div className="collapsible-body">
								<p>
									Empower and uplift youth and vulnerable populations in Kisumu
									County through holistic support, positive change, and
									opportunities for growth.
								</p>
							</div>
						)}
					</div>

					<div className="collapsible-item">
						<button
							className="collapsible-header"
							onClick={() => toggleAccordion(2)}
						>
							Vision
						</button>
						{activeIndex === 2 && (
							<div className="collapsible-body">
								<p>
									Create a community where everyone has access to healthcare,
									education, and employment, while eradicating drug abuse and
									fostering a vibrant, hopeful society.{' '}
								</p>
							</div>
						)}
					</div>

					<div className="collapsible-item">
						<button
							className="collapsible-header"
							onClick={() => toggleAccordion(3)}
						>
							Core Values
						</button>
						{activeIndex === 3 && (
							<div className="collapsible-body">
								<ul>
									<li>Empowerment</li>
									<li>Inclusivity</li>
									<li>Sustainability</li>
									<li>Transparency & accountability</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Right: Image */}
			<div className="about-right">
				<img src={volunteer} alt="About Us" className="about-image" />
			</div>
		</div>
	);
};

export default About;

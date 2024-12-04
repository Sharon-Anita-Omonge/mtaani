import React from 'react';
import './Details.css';
import Sidebar from './SideList';

const RehabilitationRecovery = () => {
	return (
		<div id="rehabilitation-recovery">
			<div className="prog-hero">
				<h1>Rehabilitation and Recovery Support</h1>
			</div>
			<div className="details">
				<div className="details-text container">
					<div>
						<h2>Therapeutic Counseling</h2>
						<p>
							Our therapeutic counseling services help individuals address the
							root causes of addiction and criminal behavior. By working with
							licensed therapists, participants gain insights into their
							emotions and triggers.
						</p>
						<p>
							This deeper understanding fosters healthier coping mechanisms and
							long-term recovery success.
						</p>
					</div>
					<div>
						<h2>Aftercare and Mentorship</h2>
						<p>
							We provide aftercare programs that include ongoing mentorship and
							support groups to help individuals stay committed to their
							recovery goals.
						</p>
						<p>
							Mentors offer encouragement and guidance, helping participants
							navigate challenges as they reintegrate into society.
						</p>
					</div>
					<div>
						<h2>Family Support Services</h2>
						<p>
							We offer family support services that include therapy sessions and
							educational resources. These help families rebuild trust and
							develop effective strategies for supporting their loved ones.
						</p>
						<p>
							A strong family network plays a crucial role in ensuring a
							successful and sustainable recovery.
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

export default RehabilitationRecovery;

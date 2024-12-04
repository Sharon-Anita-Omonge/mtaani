import React from 'react';
import './Details.css';
import Sidebar from './SideList';

const PrisonRehabilitation = () => {
	return (
		<div id="prison-rehabilitation">
			<div className="prog-hero">
				<h1>Prison Rehabilitation Programs</h1>
			</div>
			<div className="details">
				<div className="details-text container">
					<div>
						<h2>Mental Health Workshops</h2>
						<p>
							We conduct mental health workshops in prisons to help inmates
							understand and address emotional issues that may have contributed
							to their actions.
						</p>
						<p>
							These workshops provide tools for managing stress and building
							healthier relationships, laying the foundation for rehabilitation.
						</p>
					</div>
					<div>
						<h2>Vocational Training</h2>
						<p>
							Vocational training equips inmates with skills that prepare them
							for employment after release, increasing their chances of
							reintegration into society.
						</p>
						<p>
							These programs also foster a sense of purpose and confidence,
							reducing recidivism rates.
						</p>
					</div>
					<div>
						<h2>Post-Release Support</h2>
						<p>
							Our post-release support includes mentorship and transitional
							housing options to help former inmates rebuild their lives.
						</p>
						<p>
							By addressing barriers to reintegration, we provide a pathway to
							success and independence.
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

export default PrisonRehabilitation;

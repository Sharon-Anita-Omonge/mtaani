import React from 'react';
import SideBlog from './SideBlog';
import './Blog.css';

const Drugabuse = () => {
	return (
		<div id="awareness-campaign">
			<div className="blog-hero">
				<h1>Blogs</h1>
			</div>
			<div className="details">
				<div className="container">
					<h2>How Drugs Affect People's Lives</h2>
					<p>
						Drug misuse has far-reaching implications, affecting every element
						of a person's life, from health and relationships to jobs and future
						goals. Drug addiction remains an increasing concern in Kenya,
						particularly among young people, with substances such as alcohol,
						bhang, and powerful narcotics like heroin wreaking havoc on both
						individuals and communities.
					</p>
					<h3>Physical and mental health decline. </h3>
					<p>
						Drug usage has a serious impact on physical health. Drugs like
						heroin and cocaine damage the immune system, rendering users more
						susceptible to disease. Prolonged usage can harm important organs
						like the liver, heart, and brain, resulting in chronic sickness or
						death.Mental health is equally impacted. Researchers have linked
						drugs like marijuana and alcohol to depression, anxiety, and even
						psychosis. According to NACADA surveys, a considerable percentage of
						Kenyans suffering from substance addiction also struggle with mental
						health difficulties such as suicidal ideation.
					</p>
					<h3>A breakdown of relationships</h3>
					<p>
						Drug misuse can affect ties with family and friends. Addicts might
						become emotionally disconnected, impatient, and even abusive.
						Addiction-related financial pressure, such as spending money on
						drugs rather than household necessities, can result in
						disagreements, mistrust, and shattered homes.Many Kenyan families
						suffer in silence owing to the shame associated with addiction,
						leaving loved ones without the assistance they require to
						rehabilitate.
					</p>
					.<h3>The impact on education and careers</h3>
					<p>
						Substance misuse undermines academic and professional objectives.
						Young people who begin using drugs frequently drop out of school
						owing to low grades, absenteeism, or disciplinary concerns.
						According to reports, university students in Kenya are increasingly
						vulnerable to substance misuse, endangering their future
						professions.For working professionals, addiction can result in job
						loss, decreased productivity, and strained relationships with
						coworkers. Employers may be hesitant to hire people with a history
						of drug use, further limiting prospects for those attempting to
						restore their lives.
					</p>
					<h3>Higher risk of crime and legal issues</h3>
					<p>
						Drugs are closely associated with criminal activity. Addicts may use
						theft, fraud, or violence to maintain their habits. Furthermore, the
						discovery of illegal substances can lead to arrest and jail time,
						thereby endangering one's life and future opportunities.
					</p>
					<h3> Social and economic impacts </h3>
					<p>
						{' '}
						Drug addiction has a negative impact on society as a whole. Families
						lose breadwinners, healthcare systems struggle with an increase in
						drug-related ailments, and communities suffer as a result of the
						crime and poverty that addiction causes.
					</p>
					<h3>Conclusion</h3>
					<p>
						Drug use has terrible and far-reaching consequences for people's
						lives. Addressing this issue demands a collaborative effort from
						families, communities, and the government. Individuals struggling
						with addiction can recover and reclaim their lives with the right
						education, accessible rehabilitation programs, and strong support
						networks. Breaking the stigma of addiction and fostering open
						discourse are the first steps toward a better, drug-free society.
					</p>
				</div>
				<div className="details-list">
					<SideBlog />
				</div>
			</div>
		</div>
	);
};

export default Drugabuse;

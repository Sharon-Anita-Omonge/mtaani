import React from 'react';
import SideBlog from './SideBlog';
import './Blog.css';

const Rehab = () => {
	return (
		<div id="awareness-campaign">
			<div className="blog-hero">
				<h1>Blogs</h1>
			</div>
			<div className="details">
				<div className="container">
					<h2>
						Rehabilitation Over Punishment: A New Approach to Drug Offenses in
						Kenya.{' '}
					</h2>
					<p>
						Drug-related crimes have long plagued Kenya's legal and prison
						systems. Research has shown that the punitive strategy of
						imprisoning criminals fails to address the underlying causes of
						substance misuse and addiction. With juvenile offenders accounting
						for more than half of Kenya's jail population, it is evident that
						the country requires a move away from punishment and toward
						rehabilitation.
					</p>
					<h3>The Problem of Punitive Measures .</h3>
					<p>
						The "War on Drugs" in Kenya has primarily targeted low-level
						criminals, with many of them ending up in overcrowded jails. Instead
						of confronting the issues that contribute to drug use, such as
						unemployment, peer pressure, and mental health issues, these
						individuals face harsh sanctions. Unfortunately, the punitive system
						fails to provide treatment or address addiction, leading to frequent
						reoffending after release.
					</p>
					<h3>The Case for Rehabilitation</h3>
					<p>
						Countries such as Portugal and Norway have demonstrated that a
						rehabilitation-based strategy is effective, and Kenya may readily
						mimic it. Counseling, vocational training, and therapy-based
						programs not only treat addiction but also prepare individuals for
						reintegration into society. In Kenya, community organizations such
						as Support for Addictions Prevention and Treatment in Africa (SAPTA)
						are already pioneering the provision of low-cost rehabilitation
						treatments. Shifting to rehabilitation-focused policies can lower
						the burden on Kenya's jails while also giving offenders an
						opportunity to restore their lives. To provide complete care for
						recovering addicts, this approach necessitates coordination among
						the government, non-governmental organizations, and commercial
						institutions.
					</p>
					<h3>Top of the Agenda: Policy Changes</h3>
					<p>
						Kenyan Action Plan on Mental Health 2021–2025: This approach
						establishes a framework for merging addiction treatment with mental
						health care. Such activities demonstrate an increasing awareness of
						the necessity for progressive strategies. Such programs' full
						implementation and proper funding could help Kenya reduce
						drug-related criminality while also empowering vulnerable groups.
					</p>
				</div>

				<div className="details-list">
					<SideBlog />
				</div>
			</div>
		</div>
	);
};

export default Rehab;

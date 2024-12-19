import React from 'react';
import SideBlog from './SideBlog';
import './Blog.css';

const MentalHealth = () => {
	return (
		<div id="awareness-campaign">
			<div className="blog-hero">
				<h1>Blogs </h1>
			</div>
			<div className="details">
				<div className="container">
					<h2>Mental Health and Substance Abuse: Release the Shame in Kenya</h2>
					<p>
						In Kenya, the relationship between mental health and substance usage
						presents a major issue. Recent statistics reveal a concerning trend:
						as mental health issues remain untreated, a growing number of young
						individuals are developing addictions. Negative perceptions of
						mental health in Kenya make it difficult for people to be honest and
						prevent those suffering with a substance use disorder from getting
						treatment. It's time to stop this loop and replace it with a kind
						and educated attitude.
					</p>
					<h3>
						Understanding the relationship between drug usage and mental health
						is crucial.
					</h3>
					<p>
						Many Kenyans suffering stress, anxiety, or depression turn to drugs
						and alcohol as a coping mechanism. NACADA claims that much of
						substance misuse results from peer pressure, unemployment, and
						inadequate mental health treatment. Ignoring this link only
						exacerbates the issue and leaves the young especially vulnerable.
					</p>
					<h3>The Cost of Stigma</h3>
					<p>
						In Kenya, people typically view seeking treatment or discussing
						mental health issues as a sign of weakness. This cultural view
						causes many people to suffer in silence and to be unable to consult
						experts. Drug addiction often receives more attention as a criminal
						issue than a medical one. People stay caught in this vicious cycle,
						influencing their families, communities, and national economies
						without appropriate help. "Breaking the Stigma" efforts toward this
						are mounting.  The Ministry of Health has recently initiated
						campaigns to increase awareness about mental health. Community-based
						groups like *Redemption Rehabilitation Center* in Nairobi greatly
						aid affordable therapy and addiction recovery programs. Normalizing
						mental health discussions in churches, businesses, and universities
						can help dispel long-standing misunderstandings. 
					</p>
					<h3>Rehabilitation from a Whole-Person Perspective</h3>
					<p>
						By doing this, Kenya should adopt a comprehensive recovery strategy,
						focusing on mental health therapy for addiction. Effective programs
						elsewhere highlight rehabilitation and developing skills in attempts
						to return people to their homes. By emphasizing rehabilitation and
						thereby providing a second chance, Kenya can help relieve the courts
						and prisons. 
					</p>
					<p>
						Kenya's youth embody the future, and their mental health is crucial
						for the country's growth. Let's start a national conversation, back
						government programs on mental health, and provide funding for
						grassroots groups tackling these problems. Breaking the stigma is a
						shared obligation as much as a personal one. Together addressing
						mental health and drug usage will help us create a better and more
						productive Kenya.
					</p>
				</div>

				<div className="details-list">
					<SideBlog />
				</div>
			</div>
		</div>
	);
};

export default MentalHealth;

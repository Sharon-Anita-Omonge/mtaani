import React from 'react';
import SideBlog from './SideBlog';
import './Blog.css';

const Education = () => {
	return (
		<div id="awareness-campaign">
			<div className="blog-hero">
				<h1>Blogs</h1>
			</div>
			<div className="details">
				<div className="container">
					<h2>
						The Role of Education and Community Support in Preventing Drug Abuse
						in Kenya
					</h2>
					<p>
						  In Kenya, drugs remain one of the key vices facing the country's
						youth, with the use of substances such as bhang, alcohol, and
						synthetic drugs increasing at an alarming rate. But always,
						prevention is better than cure. Education, together with community
						support, can indeed go a long way toward curbing this problem before
						it even starts.
					</p>
					<h3>Education: A Tool for Prevention</h3>
					<p>
						{' '}
						In this regard, the integration of drug education in the curricula
						of schools can help create awareness among the youth. Schools should
						educate students on the dangers of drug use to enable them to make
						informed decisions. Programs such as NACADA's Youth Sensitization
						Campaigns have been successful in reaching vulnerable populations.
						We need to do much more to ensure that drug prevention education is
						accessible to all students throughout Kenya.
					</p>
					<h3>Community Support: A Collective Responsibility</h3>
					<p>
						Communities play a significant role in prevention by fostering an
						environment that discourages substance use. Parents, religious
						leaders, and local organizations should combine efforts in mentoring
						and engaging the youths with productive activities. The
						community-based rehabilitation programs operating in places like
						Mombasa and Kisumu have greatly reduced criminal activities and
						addiction rates by involving youths in sports and vocational
						workshops.
					</p>
					<h3>The Need for Holistic Prevention Strategies</h3>
					<p>
						To be truly effective, Kenya's fight against drug abuse must combine
						education and community efforts with policy support. Advocating for
						the strict control of drug distribution while promoting
						rehabilitation programs can create a balanced approach. Empowering
						local organizations with resources to conduct awareness campaigns
						and youth programs will further strengthen this effort.
					</p>
					<p>
						{' '}
						The future of Kenya lies in the hands of its youth. Let us invest in
						their potential through education and community engagement.
						Together, we can build a generation that says no to drugs and yes to
						a life filled with purpose and productivity.
					</p>
				</div>
				<div className="details-list">
					<SideBlog />
				</div>
			</div>
		</div>
	);
};

export default Education;

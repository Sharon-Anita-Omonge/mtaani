import React, { useState } from 'react';
import './TeamData.css';
import Tompo from '../../assets/tompo.png';
import David from '../../assets/david.png';
import Denis from '../../assets/deno.png';
import anita from '../../assets/anita.png';
import okoko from '../../assets/okoko.png';
import Yvette from '../../assets/Yvette.png';
import jenifer from '../../assets/jeniffer.png';
import wallan from '../../assets/wallan.png';

// Team members' data
const teamData = [
	{
		id: 1,
		name: 'Tom Erick',
		role: 'Founder & CEO',
		occupation: 'Entrepreneur',
		phone: '+163 2564 3657',
		email: 'alexjulian@gmail.com',
		image: [Tompo],
	},
	{
		id: 2,
		name: 'Denis Otieno',
		role: 'Executive Director',
		occupation: 'Banker',
		phone: '+123 4567 8910',
		email: 'emilysmith@gmail.com',
		image: [Denis],
	},
	{
		id: 3,
		name: 'Jenipher Alosi',
		role: 'Communication Manager',
		occupation: 'Banker',
		phone: '+198 7654 3210',
		email: 'johndoe@gmail.com',
		image: [jenifer],
	},
	{
		id: 4,
		name: 'Brian Okoko',
		role: 'Administrative Manager',
		occupation: 'Banker',
		phone: '+198 7654 3210',
		email: 'johndoe@gmail.com',
		image: [okoko],
	},
	{
		id: 5,
		name: 'David Ochanji',
		role: 'Programme Manager',
		occupation: 'Banker',
		phone: '+198 7654 3210',
		email: 'johndoe@gmail.com',
		image: [David],
	},
	{
		id: 6,
		name: 'Eric Oketch',
		role: 'Patron',
		occupation: 'Banker',
		phone: '+198 7654 3210',
		email: 'johndoe@gmail.com',
		image: [wallan],
	},
	{
		id: 7,
		name: 'Anita Omonge',
		role: 'Volunteer',
		occupation: 'Gender Expert',
		phone: '+254 769 233 898',
		email: 'anitaomonge@maishamtaani.com',
		image: [anita],
	},
	{
		id: 8,
		name: 'Yvette Mitchelle',
		role: 'Volunteer',
		occupation: 'Banker',
		phone: '+198 7654 3210',
		email: 'johndoe@gmail.com',
		image: [Yvette],
	},
];

const TeamPage = () => {
	const [selectedMember, setSelectedMember] = useState(teamData[0]); // Default to the first member

	return (
		<div className="team-container">
			<h1>Meet Our Volunteers</h1>

			<div className="team-content">
				{/* Left: Thumbnails */}
				<div className="team-thumbnails">
					{teamData.map((member) => (
						<img
							key={member.id}
							src={member.image}
							alt={member.name}
							className={`thumbnail ${
								selectedMember.id === member.id ? 'active' : ''
							}`}
							onClick={() => setSelectedMember(member)}
						/>
					))}
				</div>

				{/* Middle: Main selected image */}
				<div className="team-main-image">
					<img
						src={selectedMember.image}
						alt={selectedMember.name}
						className="selected-image"
					/>
				</div>

				{/* Right: Selected member details */}
				<div className="team-details">
					<h2>{selectedMember.name}</h2>
					<h3>{selectedMember.role}</h3>
					<p>
						<strong>Occupation:</strong> {selectedMember.occupation}
					</p>
					<p>
						<strong>Phone Number:</strong> {selectedMember.phone}
					</p>
					<p>
						<strong>Email:</strong> {selectedMember.email}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamPage;

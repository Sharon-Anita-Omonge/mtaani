import React, { useState } from 'react';
import './VolunteerForm.css'; // Create or update the CSS file

const VolunteerForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		mobile: '',
		message: '',
	});

	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const apiKey = 'YOUR_WEB3FORMS_ACCESS_KEY'; // Replace with your Web3Forms API key

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					access_key: apiKey,
					name: formData.name,
					email: formData.email,
					mobile: formData.mobile,
					message: formData.message,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setSuccessMessage('Thank you for signing up as a volunteer!');
				setFormData({ name: '', email: '', mobile: '', message: '' });
			} else {
				setErrorMessage('Something went wrong. Please try again later.');
			}
		} catch (error) {
			setErrorMessage('Error submitting the form. Please try again.');
		}
	};

	return (
		<div className="form">
			<h1>What you can do to help</h1>

			<div className="volunteer-form-container">
				{/* Left Section */}
				<div className="left-section">
					<h1>Become a Donor</h1>
					<p>
						Join the many individuals and organizations making a difference.
					</p>
					<a href="/donate" className="donate-button">
						Donate
					</a>
				</div>

				{/* Right Section */}
				<div className="form-wrapper">
					<h1>Become a Volunteer</h1>
					<p>Take the first step and volunteer with us today.</p>

					{successMessage && (
						<div className="success-message">{successMessage}</div>
					)}
					{errorMessage && <div className="error-message">{errorMessage}</div>}

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type="tel"
							name="mobile"
							placeholder="Mobile"
							value={formData.mobile}
							onChange={handleChange}
							required
						/>
						<textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default VolunteerForm;

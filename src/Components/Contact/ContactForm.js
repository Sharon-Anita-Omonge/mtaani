import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					access_key: 'YOUR_ACCESS_KEY', // Replace with your Web3Forms Access Key
					...formData,
				}),
			});

			if (response.ok) {
				setSuccess(true);
				setError(false);
				setFormData({
					name: '',
					email: '',
					phone: '',
					message: '',
				});
			} else {
				setSuccess(false);
				setError(true);
			}
		} catch (err) {
			setSuccess(false);
			setError(true);
		}
	};
	const handlePhoneClick = (event) => {
		event.preventDefault();
		window.location.href = 'tel:+254710466533';
	};

	return (
		<div className="main-contact" id="contact">
			<h1>Get In Touch With Us</h1>

			<div className="contact-wrapper">
				<div className="contact-form-container">
					<p>
						We are here to answer your questions. If you have any questions
						please leave us a message. We will contact with you as soon as
						possible.
					</p>
					<form onSubmit={handleSubmit} className="contact-form">
						<label htmlFor="name">Your Full Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your full name"
							required
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
						/>

						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="Enter your phone number"
							required
						/>

						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your message here"
							required
						></textarea>

						<button type="submit">Submit</button>
					</form>

					{success && (
						<p className="success-message">
							Thank you! Your message has been sent.
						</p>
					)}
					{error && (
						<p className="error-message">
							Oops! Something went wrong. Please try again.
						</p>
					)}
				</div>
				{/* Address Section */}
				<div className="contact-info">
					<h2>Our Address</h2>
					<p>
						<strong>Address:</strong> P.O.Box 40100-151, Kisumu
					</p>
					<p>
						{' '}
						<strong>Telephone</strong>{' '}
						<a href="tel:254763858515" onClick={handlePhoneClick}>
							+254 763 858 515
						</a>
						<br />
						<a href="tel:254702582348" onClick={handlePhoneClick}>
							+254 702 582 348
						</a>
					</p>
					<p>
						<strong>Email:</strong> nfo@maishamtaani.org
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

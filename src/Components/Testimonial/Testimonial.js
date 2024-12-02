import React, { useState } from 'react';
import './Testimonial.css';
import czar from '../../assets/czar.png';
import image from '../../assets/gallery22.jpeg';

const testimonials = [
	{
		text: 'Being part of the volunteer team at Maisha Mtaani has been a life-changing experience. The joy of seeing people reclaim their lives from addiction is unmatched.',

		name: 'Czar Onyango',
		title: 'Volunteer (R.I.P)',
		image: [czar],
	},
	{
		text: 'Volunteering at Maisha Mtaani has been an incredibly rewarding experience. Helping others on their journey to recovery has given me a sense of purpose.',
		name: 'Stacy Nduta',
		title: 'Vounteer',
		image: [image],
	},
	{
		text: 'Finding Maisha Mtaani was a turning point in my battle against drug abuse. Their dedication to recovery and mental health has made all the difference.',
		name: 'Alex Oketch',
		title: 'Former Addict',
		image: [image],
	},
	{
		text: "Maisha Mtaani gave me the support I needed to overcome my struggles with addiction. Their programs and the community they've built have been life-changing.",

		name: 'John Patrick Oluoch',
		title: 'Former Addict',
		image: [image],
	},
	{
		text: 'Finding Maisha Mtaani was a turning point in my battle against drug abuse. Their dedication to recovery and mental health has made all the difference.',
		name: 'Alex Oketch',
		title: 'Former Addict',
		image: [image],
	},
];

const Testimonial = () => {
	const [current, setCurrent] = useState(0);

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setCurrent(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<div className="testimonial-container">
			<h1>What Our Clients Say</h1>
			<div className="testimonial-card">
				<p className="testimonial-text">"{testimonials[current].text}"</p>
				<div className="testimonial-author">
					<img
						src={testimonials[current].image}
						alt={testimonials[current].name}
					/>
					<div>
						<h4>{testimonials[current].name}</h4>
						<p>{testimonials[current].title}</p>
					</div>
				</div>
			</div>
			<div className="testimonial-navigation">
				<button onClick={handlePrev}>&lt;</button>
				<button onClick={handleNext}>&gt;</button>
			</div>
			<div className="testimonial-dots">
				{testimonials.map((_, index) => (
					<span
						key={index}
						className={`dot ${current === index ? 'active' : ''}`}
						onClick={() => setCurrent(index)}
					></span>
				))}
			</div>
		</div>
	);
};

export default Testimonial;

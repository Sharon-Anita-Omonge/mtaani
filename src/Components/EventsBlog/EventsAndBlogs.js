import React, { useState } from 'react';
import './EventsAndBlogs.css';

const EventsAndBlogs = () => {
	// Sample events data
	const events = [
		{
			date: 'March 2025',
			time: '10:00 AM - 12:00 PM',
			location: 'Online',
			title: ' campaign for women month',
		},
		{
			date: ' 31st August ',
			time: '9:30 AM - 4:00 PM',
			location: 'Kodiaga Prison, Kisumu',
			target: 'Aged prisoners (65yrs and above)',
			title: 'Chapo Fest',
		},

		{
			date: '30 March',
			time: '11:00 AM - 1:00 PM',
			location: 'Kondele, Kisumu',
			title: 'Drug Awareness Campaign',
		},
		{
			date: '15 April',
			time: '2:00 PM - 4:00 PM',
			location: 'Mamboleo, Kisumu',
			title: 'Under 16 football tournamnet',
		},
	];

	const [currentPage, setCurrentPage] = useState(0);
	const eventsPerPage = 2; // Number of events per page
	const totalPages = Math.ceil(events.length / eventsPerPage);

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex);
	};

	const displayedEvents = events.slice(
		currentPage * eventsPerPage,
		currentPage * eventsPerPage + eventsPerPage
	);

	return (
		<div className="events-blogs-container">
			{/* Left: Events Section */}
			<div className="events-section">
				<h1>Upcoming Events</h1>
				{displayedEvents.map((event, index) => (
					<div className="event-item" key={index}>
						<div className="event-date">{event.date}</div>
						<div className="event-details">
							<h3>{event.title}</h3>
							<p>{event.time}</p>
							<p>{event.target}</p>
							<p>{event.location}</p>
						</div>
					</div>
				))}

				{/* Pagination */}
				<div className="pagination">
					{Array.from({ length: totalPages }, (_, index) => (
						<span
							key={index}
							className={`pagination-dot ${
								currentPage === index ? 'active' : ''
							}`}
							onClick={() => handlePageChange(index)}
						></span>
					))}
				</div>
			</div>

			{/* Right: Blogs Section */}
			<div className="blogs-section">
				<h2>Read Our Blogs</h2>
				<p>
					Explore our latest blog posts for inspiring stories, updates, and
					resources to make a difference!
				</p>
				<button
					className="blog-button"
					onClick={() => (window.location.href = '/drugabuse')}
				>
					Go to Blog Page
				</button>
			</div>
		</div>
	);
};

export default EventsAndBlogs;

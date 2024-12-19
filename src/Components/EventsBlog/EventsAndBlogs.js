import React, { useState } from 'react';
import './EventsAndBlogs.css';

const EventsAndBlogs = () => {
	const events = [
		{
			date: 'March ',
			time: '10:00 AM - 12:00 PM',
			location: 'Online',
			title: 'Campaign for Women Month',
			target: 'Women',
		},
		{
			date: '31st August',
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
			target: 'Youths',
		},
		{
			date: '15 April',
			time: '2:00 PM - 4:00 PM',
			location: 'Mamboleo, Kisumu',
			title: 'Under 16 Football Tournament',
			target: 'Children Under 16',
		},
	];

	const [currentPage, setCurrentPage] = useState(0);
	const eventsPerPage = 2;
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
				<h2 className="events-title">Upcoming Events</h2>
				<div className="events-list">
					{displayedEvents.map((event, index) => (
						<div className="event-card" key={index}>
							<div className="event-card-header">
								<span className="event-card-date">{event.date}</span>
							</div>
							<div className="event-card-body">
								<h3 className="event-card-title">{event.title}</h3>
								<p className="event-card-detail">Time: {event.time}</p>
								<p className="event-card-detail">Location: {event.location}</p>
								{event.target && (
									<p className="event-card-detail">Target: {event.target}</p>
								)}
							</div>
						</div>
					))}
				</div>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import gallery1 from '../../assets/gallery1.jpeg';
import gallery2 from '../../assets/gallery2.jpeg';
import gallery3 from '../../assets/gallery3.jpeg';
import gallery4 from '../../assets/gallery4.jpeg';
import gallery5 from '../../assets/gallery5.jpeg';
import gallery6 from '../../assets/gallery6.jpeg';
import gallery7 from '../../assets/gallery7.jpeg';
import gallery8 from '../../assets/gallery8.jpeg';

const images = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8,
];

const Gallery = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(null);

	// Open the modal with the clicked image
	const openModal = (index) => {
		setCurrentImageIndex(index);
	};

	// Close the modal
	const closeModal = () => {
		setCurrentImageIndex(null);
	};

	// Navigate to the previous image
	const showPreviousImage = (e) => {
		e.stopPropagation(); // Prevent closing the modal
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Navigate to the next image
	const showNextImage = (e) => {
		e.stopPropagation(); // Prevent closing the modal
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="gallery-container">
			<h1>Our Gallery</h1>
			<div className="gallery">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Gallery ${index}`}
						className="gallery-image"
						onClick={() => openModal(index)} // Open modal with image index
					/>
				))}
			</div>

			{/* Fullscreen Modal */}
			{currentImageIndex !== null && (
				<div className="modal" onClick={closeModal}>
					<span className="modal-close" onClick={closeModal}>
						&times;
					</span>
					<div className="modal-content">
						<button className="arrow left-arrow" onClick={showPreviousImage}>
							&#10094; {/* Left arrow */}
						</button>
						<img
							src={images[currentImageIndex]}
							alt={`Gallery ${currentImageIndex}`}
							className="modal-image"
						/>
						<button className="arrow right-arrow" onClick={showNextImage}>
							&#10095; {/* Right arrow */}
						</button>
					</div>
				</div>
			)}

			<div className="view-gallery-link">
				<Link to="/maingallery">View Full Gallery</Link>
			</div>
		</div>
	);
};

export default Gallery;

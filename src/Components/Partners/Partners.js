import React, { useEffect, useRef, useMemo } from 'react';
import './Partners.css';
import nacada from '../../assets/NACADA.png';
import kisumucounty from '../../assets/kisumu-county.jpeg';
import maishamed from '../../assets/maishamed.png';

const Partners = () => {
	const partners = useMemo(
		() => [
			{ id: 'nacada', src: nacada, name: 'NACADA' },
			{ id: 'kisumucounty', src: kisumucounty, name: 'Kisumu County' },
			{ id: 'maishamed', src: maishamed, name: 'Maisha Med' },
		],
		[]
	);

	// Memoize extendedPartners to avoid recalculating on every render
	const extendedPartners = useMemo(
		() => [...partners, ...partners],
		[partners]
	);

	const slideRef = useRef();

	useEffect(() => {
		const slideContainer = slideRef.current;
		let interval;

		const startAutoSlide = () => {
			interval = setInterval(() => {
				const currentTransform = parseInt(
					slideContainer.style.transform
						.replace('translateX(', '')
						.replace('%)', ''),
					10
				);

				const nextTransform = currentTransform - 100 / extendedPartners.length;

				if (
					Math.abs(nextTransform) >=
					(100 / extendedPartners.length) * partners.length
				) {
					slideContainer.style.transition = 'none';
					slideContainer.style.transform = `translateX(0%)`;
					setTimeout(() => {
						slideContainer.style.transition = 'transform 1s ease-in-out';
						slideContainer.style.transform = `translateX(-${
							100 / extendedPartners.length
						}%)`;
					}, 50);
				} else {
					slideContainer.style.transform = `translateX(${nextTransform}%)`;
				}
			}, 3000);
		};

		startAutoSlide();

		return () => clearInterval(interval);
	}, [partners.length, extendedPartners]);

	return (
		<div className="partners-container">
			<h1>Our Partners</h1>
			<div className="partner-logos" ref={slideRef}>
				{extendedPartners.map((partner, index) => (
					<div className="slide" key={index}>
						<img src={partner.src} alt={partner.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Partners;

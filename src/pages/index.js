import React, { useState, useRef } from 'react';
import { PercentageLoader } from '../loading/Loading';
import '../styles/main.scss';
import images from '../utilities/images';

// markup
const IndexPage = () => {
	const [modal, setModal] = useState(false);
	const [modalContent, setModalContent] = useState({
		img: '',
		thumb: '',
		alt: '',
		name: '',
	});
	const [loading, setLoading] = useState(true);
	const [percentage, setPercentage] = useState(0);
	const counter = useRef(0);
	const imageLoaded = () => {
		counter.current += 1;
		setPercentage(Math.floor((counter.current / images.length) * 100));
		if (counter.current === images.length) {
			console.log(
				'image loaded:',
				counter.current,
				loading,
				images.length
			);
			setLoading(false);
		}
	};

	const handleModal = (image) => {
		setModalContent({
			img: image.full,
			thumb: image.thumb,
			alt: image.alt,
			name: image.name,
		});
		setModal(!modal);
	};

	return (
		<main id='index-page'>
			<PercentageLoader loading={loading} percentage={percentage} />

			<title>Louie Beluga || Creative Portfolio</title>
			<div className={`modal ${modal ? 'modal-open' : 'modal-closed'}`}>
				<button
					className='close-modal-btn'
					onClick={() => setModal(false)}>
					&times;
				</button>
				<img
					className='modal-img'
					src={modalContent.img}
					alt={modalContent.alt}
				/>
			</div>

			<div
				className='masonry-with-columns'
				style={{ display: loading ? 'none' : 'block' }}>
				{images.map((image) => {
					return (
						<a
							href='#!'
							key={image.full}
							className='masonry-block'
							onClick={() => {
								handleModal(image);
							}}
							style={{
								animation: `loaded ${
									Math.random() + 1
								}s ease-out`,
							}}>
							<div className='masonry-block-filter'></div>
							<img
								className='masonry-block-img'
								src={image.full}
								alt={image.alt}
								onLoad={imageLoaded}
							/>
						</a>
					);
				})}
			</div>
		</main>
	);
};

export default IndexPage;

import React, { useState } from 'react';
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

			<div className='masonry-with-columns'>
				{images.map((image) => {
					return (
						<a
							href='#!'
							key={image.img}
							id={images.indexOf(image)}
							className='masonry-block'
							onClick={() => {
								handleModal(image);
							}}>
							<div className='masonry-block-filter'></div>
							<img
								className='masonry-block-img'
								src={image.thumb}
								alt={image.alt}
							/>
						</a>
					);
				})}
			</div>
		</main>
	);
};

export default IndexPage;

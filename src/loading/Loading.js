import React from 'react';

export const Spinner = ({ loading }) => {
	return (
		<div
			className='spinner-anchor'
			style={{ display: loading ? 'flex' : 'none' }}>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

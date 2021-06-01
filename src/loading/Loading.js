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

export const PercentageLoader = ({ loading, percentage }) => {
	return (
		<div
			className='percentage-anchor'
			style={{ display: loading ? 'flex' : 'none' }}>
			<div
				className='filler'
				style={{
					height: `${percentage}vw`,
					width: `${percentage}vw`,
				}}></div>
			<p className='percentage'>{percentage}%</p>
		</div>
	);
};

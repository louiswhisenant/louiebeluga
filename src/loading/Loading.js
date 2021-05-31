import React from 'react';

export const Spinner = () => {
	return (
		<div className='page-wrapper spinner-anchor'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

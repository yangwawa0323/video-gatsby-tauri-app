import React from 'react';
import Header from '../components/head';
import VideoList from '../components/videoList';

function index() {
	return (
		<div className='flex flex-col items-center'>
			<Header />
			<div className='w-9/10 p-12 grid grid-flow-row grid-cols-3 gap-12'>
				<VideoList />
			</div>
		</div>
	);
}

export default index;

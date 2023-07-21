/** @format */

import React from 'react';
import Header from '../components/head';
import VideoList from '../components/videoList';

function index() {
	return (
		<div className='flex flex-col items-center'>
			<Header />
			<div className='w-9/10 p-12 flex flex-col gap-12'>
				<VideoList />
			</div>
		</div>
	);
}

export const Head = ({ location, params, data, pageContext }) => {
	console.log(pageContext, data, location, params);
	return (
		<>
			<title>腾云悦智视频APP</title>
		</>
	);
};

export default index;

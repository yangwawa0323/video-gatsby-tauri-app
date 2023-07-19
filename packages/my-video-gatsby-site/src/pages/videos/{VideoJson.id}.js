import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VideoPlayer from '../../components/player';
import Header from '../../components/head';

const Video = ({ children, src }) => {
	const data = useStaticQuery(
		graphql`
			query {
				videoJson {
					id
					title
					url
					description
				}
			}
		`
	);

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		responsive: true,
		// fluid: true,
		width: 800,
		sources: [
			{
				src: data.videoJson.url,
				type: 'video/mp4',
			},
		],
	};

	return (
		<div className='flex flex-col justify-center items-center gap-12'>
			<Header />
			<div className='flex flex-col justify-center items-center gap-8'>
				<h2 className='font-bold text-2xl'>{data.videoJson.title}</h2>
				<p className='text-gray-500'>{data.videoJson.description}</p>
			</div>
			<VideoPlayer options={videoJsOptions} />

			<Link
				to='/'
				className='font-bold'
			>
				返回列表
			</Link>
		</div>
	);
};

export default Video;

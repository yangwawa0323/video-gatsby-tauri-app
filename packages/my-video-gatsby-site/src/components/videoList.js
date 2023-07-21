/** @format */

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const VideoList = () => {
	const data = useStaticQuery(
		graphql`
			query MyQuery {
				allVideoJson(sort: { serial: ASC }) {
					nodes {
						serial
						id
						title
					}
				}
			}
		`
	);
	return (
		<div>
			<ol className='leading-8'>
				{data.allVideoJson.nodes.map((video, index) => (
					<li key={index}>
						第<span className='font-bold text-gray-600'>{video.serial}</span>章:{' '}
						<Link
							className='font-extrabold'
							to={`/videos/${video.id}`}
						>
							{video.title}
						</Link>
					</li>
				))}
			</ol>
		</div>
	);
};

export default VideoList;

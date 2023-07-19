/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `My video gatsby site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [require('tailwindcss')],
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
				// Ignore files starting with a dot
				ignore: [`**/\.*`],
				// Use "mtime" and "inode" to fingerprint files (to check if file has changed)
				fastHash: true,
			},
		},
	],
};

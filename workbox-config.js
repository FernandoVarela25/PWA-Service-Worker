module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,jpg,png,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
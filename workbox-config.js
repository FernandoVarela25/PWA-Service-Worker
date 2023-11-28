module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,jpg,png,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
const lazier = require('../../index.js');
module.exports = lazier({
	a: './a.js',
	b: './b.js'
}, __dirname);
const path = require('path');
class Lazier {
	constructor(key_path, dirname = '') {
		for(const key in key_path) {
			this.__defineGetter__(key, () => require(path.join(dirname, key_path[key])));
		}
	}
};

const lazier = (key_path, dirname = '') => new Lazier(key_path, dirname);
lazier.Lazier = Lazier;

module.exports = lazier;

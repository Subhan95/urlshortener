var mongoose = require('mongoose');

var urlSchema = {
	bigUrl: {
		type: String,
		required: true
	},
	shortUrl: {
		type: String,
		required: true
	}
}

module.exports = new mongoose.Schema(urlSchema);
module.exports.urlSchema = urlSchema;
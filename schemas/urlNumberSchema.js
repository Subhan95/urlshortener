var mongoose = require('mongoose');

var urlNumberSchema = {
	urlNumber: {
		type: Number
	}
}

module.exports = new mongoose.Schema(urlNumberSchema)
module.exports.urlNumberSchema = urlNumberSchema;
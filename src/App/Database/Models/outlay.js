const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const outlayModel = new Schema({
	user_id: {
		type: ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	spent: {
		type: Number,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('Outlay', outlayModel);
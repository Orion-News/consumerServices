const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const outlayModel = new Schema({
	user_id : {
		type: ObjectId,
		ref: 'User'
	},
	title: String,
	category: String,
	spent: Number,
	date: String,
	description: String
});

module.exports = mongoose.model('Outlay', outlayModel);
const mongoose = require('../index.js');

const Schema = mongoose.Schema;

const categoriesModel = new Schema({
    name: String,
    icon: String,
	description: String
});

module.exports = mongoose.model('Categories', categoriesModel);
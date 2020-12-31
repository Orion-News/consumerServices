class App {
	constructor () {
		this.express = require('express')();
		this.routes();
	}

	routes () {
		this.express.use(require('./src/App/routes'));
	}

}

module.exports = new App().express;
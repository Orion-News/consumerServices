import express from 'express';
import routes from './src/App/routes';

class App {
	constructor () {
		this.express = express();
		this.routes();
	}

	routes () {
		this.express.use(routes);
	}

}

module.exports = new App().express;
import express from 'express';
import routes from './src/App/routes';

class App {
	constructor () {
		this.express = express();
		this.routes();
		this.middlewares();
	}

	routes () {
		this.express.use(routes);
	}

	middlewares () {
		import 'dotenv/config';
	}
}

module.exports = new App().express;
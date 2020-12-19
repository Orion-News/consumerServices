
const express = require('express');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
	console.log(`subiu na porta ${3000}; para acessar click -> http://localhost:${3000}`, );
});

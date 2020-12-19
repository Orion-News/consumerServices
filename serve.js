const express = require('express');
const coin = require('./src/robot/coin.js');
const weather = require('./src/robot/weather.js');
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
	response.send('home page, Hello');
});

app.post('/coin', async (req, res) => {
	const { searchBefore, searchAfter } = req.body.data;
	const coins = await coin.CurrencyConverterTo( searchBefore, searchAfter );
	res.send(`O valor para cada ${coins.searchCurrency}, ${ searchBefore } 
				é igual a ${ coins.CurrencyOfSearch }, ${ searchAfter }`);	
});

app.get('/weather', async (req, res) => {
	const weather_ = await weather.weatherSearchRobot( req.body.local );
	res.json(weather_);
});

app.get('/for', async (req, res) => {
	const weather_ = await weather.metodoTeste();
	res.json(weather_);
});

	
app.listen(3000, () => {
	console.log(`subiu na porta ${3000}; para acessar click -> http://localhost:3000`, );
});
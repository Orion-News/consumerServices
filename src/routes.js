const express = require('express');
const coinController = require('./Controllers/coinController.js');
const weatherController = require('./Controllers/weatherController.js');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ Message : 'Hello Welcome, Choose a routes! ' });
});

// routes of robot coin
routes.post('/coin', coinController.reponseOfCoin);


// routes of robot weather
routes.get('/weather', weatherController.responseWeatherSearchRobot);


module.exports = routes;
const express = require('express');
const coinController = require('./Controllers/coinController.js');
const weatherController = require('./Controllers/weatherController.js');
const outlayController = require('./Controllers/outlayController.js');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ Message : 'Hello Welcome, Choose a routes! ' });
});

// routes of robot coin
routes.post('/', coinController.reponseOfCoin);


// routes of robot weather
routes.get('/', weatherController.responseWeatherSearchRobot);

routes.post('/outlay', outlayController.store);

module.exports = routes;
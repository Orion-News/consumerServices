const express = require('express');
const coinController = require('./Controllers/coinController.js');
const weatherController = require('./Controllers/weatherController.js');
const outlayController = require('./Controllers/outlayController.js');
const routes = express.Router();

// API HOME SERVER send from DOCs
routes.get('/', (request, response) => {
    return response.json({ Message : 'Hello Welcome, Choose a routes! ' });
});

// routes of robot coin
routes.post('/', coinController.reponseOfCoin);


// routes of robot weather
routes.get('/', weatherController.responseWeatherSearchRobot);


// routes from C.R.U.D Outlay;
routes.post('/outlay', outlayController.store);
routes.get('/outlay/:id', outlayController.show);
routes.put('/outlay/:id', outlayController.update);
routes.delete('/outlay/:id', outlayController.destroy);
routes.get('/outlay', outlayController.index);

module.exports = routes;
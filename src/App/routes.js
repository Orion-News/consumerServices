const express = require('express');
const coinController = require('./Controllers/coinController.js');
const weatherController = require('./Controllers/weatherController.js');
const outlayController = require('./Controllers/outlayController.js');
const userController = require('./Controllers/userController.js');
const categoryController = require('./Controllers/categoryController.js');
const routes = express.Router();

routes.use(express.json());

// API HOME SERVER send from DOCs
routes.get('/', (request, response) => {
    return response.json({ Message : 'Hello Welcome, Choose a routes!' });
});

// routes of robot coin
routes.post('/coins', coinController.reponseOfCoin);

// routes of robot weather
routes.get('/weather', weatherController.responseWeatherSearchRobot);

// routes from register and login;
routes.post('/login', userController.Auth_);
routes.post('/register', userController.store);

// routes from C.R.U.D User;
routes.get('/user/:id', userController.show);

// routes from C.R.U.D Outlay;
routes.post('/outlay', outlayController.store);
routes.put('/outlay/:id', outlayController.update);
routes.delete('/outlay/:id', outlayController.destroy);
routes.get('/outlay', outlayController.index);
routes.get('/outlay/:id', outlayController.show);

// router to Categories;
routes.post('/category', categoryController.storeMany);
routes.get('/category', categoryController.index);

module.exports = routes;
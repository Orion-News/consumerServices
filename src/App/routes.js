import { Router, json } from 'express';
import { 
    coinController,
    userController,
    weatherController,
    outlayController, 
    categoryController,
    authController,
    } 
from '../Config/importsControllers.js';

import authMiddleware from '../App/middleware/auth.js';

const routes = Router();

routes.use(json());

// API HOME SERVER send from DOCs
routes.get('/', (request, response) => {
    return response.json({ Message : 'Hello Welcome, Choose a routes!' });
});

// router to Categories;
routes.get('/category', categoryController.index);

// routes from register and login;
routes.post('/login', authController.login);
routes.post('/register', userController.store);

routes.use(authMiddleware);


// routes protected || routes protected \\
routes.get('/authenticated', (req, res) => res.json({ Message : 'VERIFICAR TOKEN', status : true, UserId: req.userId }));

// routes from C.R.U.D User;
routes.get('/user/:id', userController.show);

// routes from C.R.U.D Outlay;
routes.post('/outlay', outlayController.store);
routes.put('/outlay/:id', outlayController.update);
routes.delete('/outlay/:id', outlayController.destroy);
routes.get('/outlay', outlayController.index);
routes.get('/outlay/:id', outlayController.show);

// router to Categories;
// routes.post('/category', categoryController.storeMany);

// routes of robot coin
routes.post('/coins', coinController.reponseOfCoin);

// routes of robot weather
routes.get('/weather', weatherController.responseWeatherSearchRobot);

module.exports = routes;
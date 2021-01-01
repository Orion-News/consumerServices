const userServices = require('../Services/userServices');

class UserController {
    
    async store (request, response) {
        const userStore = await userServices.store(request.body.data);
        response.json(userStore);
    }
}

module.exports = new UserController();
const userServices = require('../Services/userServices');

class UserController {
    
    async store (request, response) {
        const { data } = request.body;
        try {
            await userServices.verifyEmail(data.email);
            const userStore = await userServices.store(data);
            response.json(userStore);
        } catch (e) {
            return response.status(400).send({ error : `${e}`});
        }
    }

}

module.exports = new UserController();
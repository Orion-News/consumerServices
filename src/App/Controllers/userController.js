const userServices = require('../Services/userServices');

class UserController {
    
    async Auth_ (request, response) {
        const { email, password } = request.body.data;
        try{
            const user = await userServices.Auth_(email, password);
            response.json(user);
        } catch (e) {
            return response.status(401).send({ "Unable to authenticate user" : `${e}`});
        }
    }

    async store (request, response) {
        const { data } = request.body;
        try {
            await userServices.verifyEmail(data.email);
            const userStore = await userServices.store(data);
            response.json({ "User registered successfully ": true, "User Name: " : userStore.name });
        } catch (e) {
            return response.status(400).send({ "Unable to register user" : `${e}`});
        }
    }

    async show (request, response) {
        try {
            response.json(await userServices.show(request.params.id));
        } catch (e) {
            return response.status(404).send({ "Could not display user" : `${e}`});
        }
    }


}

module.exports = new UserController();
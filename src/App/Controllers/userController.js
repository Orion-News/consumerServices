import userServices from '../Services/userServices';

class UserController {
    
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
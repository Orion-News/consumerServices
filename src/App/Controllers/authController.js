import { authServices } from '../../Config/importsServices.js';

class Auth_ {

    async login (request, response) {
        const { email, password } = request.body.data;
        try{
            const user = await authServices.login(email, password);
            response.json(user);
        } catch (e) {
            return response.status(401).send({ "Unable to authenticate user" : `${e}`});
        }
    }
}

module.exports = new Auth_();
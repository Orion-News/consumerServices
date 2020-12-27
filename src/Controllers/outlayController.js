const { param } = require('../routes.js');
const outlayServices = require('../Services/outlayServices.js');

class outlayController {
    constructor() {

    }

    async store (request, response) {
        const dataStore = await outlayServices.store(request.body.data);
        response.json(dataStore);
    }

    async index (request, response) {
        const indexData = await outlayServices.index();
        response.json(indexData);
    }

    async show (request, response) {
        const showData = await outlayServices.show(request.params.id);
        response.json(showData);
    }

    async update (request, response) {
        try {
            const { data } = request.body;
            const dataUpdate = await outlayServices.update(request.params.id, data);
            response.json(dataUpdate);
        } catch (e) {
            throw new Error (e);
        }
    }

    async destroy (request, response) {
        const dataDestroy = await outlayServices.destroy(request.params.id);
        response.json(dataDestroy);
    }
}

module.exports = new outlayController();
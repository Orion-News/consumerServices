const outlayServices = require('../Services/outlayServices.js');
const generateItem = require('../App/Config/functionLoca.js');
class outlayController {
    constructor() {

    }

    async store (request, response) {
        try {
            const dataStore = generateItem.returnObjectInsert(request.body.data);
            const returnStore = await outlayServices.store(dataStore);
            response.json(returnStore);
        } catch (e) {
            throw new Error(e);
        }
    }

    async index (request, response) {
        try {
            const indexData = await outlayServices.index();
            response.json(indexData);
        } catch (e) {
            throw new Error(e);
        }
    }

    async show (request, response) {
        try {
            const showData = await outlayServices.show(request.params.id);
            response.json(showData);
        } catch (e) {
            throw new Error(e);
        }
    }

    async update (request, response) {
        try {
            const { data } = request.body;
            const dataUpdate = await outlayServices.update(request.params.id, data);
            response.json(dataUpdate);
        } catch (e) {
            throw new Error(e);
        }
    }

    async destroy (request, response) {
        try {
            const dataDestroy = await outlayServices.destroy(request.params.id);
            response.json(dataDestroy);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new outlayController();
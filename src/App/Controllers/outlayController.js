const outlayServices = require('../Services/outlayServices.js');
const generateItem = require('../../Config/functionLoca.js');
class OutlayController {
    constructor() {

    }

    async store (request, response) {
        try {
            const dataStore = generateItem.returnObjectInsert(request.body.data);
            const returnStore = await outlayServices.store(dataStore);
            response.json(returnStore);
        } catch (e) {
            return response.status(400).send({ "Unable to Outlay" : `${e}`});
        }
    }

    async index (request, response) {
        try {
            response.json(await outlayServices.index());
        } catch (e) {
            return response.status(404).send({ "Could not list your expenses" : `${e}`});
        }
    }

    async show (request, response) {
        try {
            const showData = await outlayServices.show(request.params.id);
            response.json(showData);
        } catch (e) {
            return response.status(404).send({ "Could not display Outlay" : `${e}`});
        }
    }

    async update (request, response) {
        try {
            const { data } = request.body;
            const dataUpdate = await outlayServices.update(request.params.id, data);
            response.json(dataUpdate);
        } catch (e) {
            return response.status(404).send({ "Unable to update an expense" : `${e}`});
        }
    }

    async destroy (request, response) {
        try {
            const dataDestroy = await outlayServices.destroy(request.params.id);
            response.json(dataDestroy);
        } catch (e) {
            return response.status(404).send({ "An expense could not be deleted" : `${e}`});
        }
    }
}

module.exports = new OutlayController();
const outlayServices = require('../Services/outlayServices.js');

class outlayController {
    constructor() {

    }

    async store (request, response) {
        const data = await outlayServices.store(request.body.data);
        response.json(data)
    }

    async index (request, response) {
        const data = await outlayServices.index();
        response.json(data)
    }
}

module.exports = new outlayController();
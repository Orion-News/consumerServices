const Outlay = require('../Database/Models/outlay');

// adicionar await nos metodos ao adicionar db;
class outlayService {
    constructor () {

    }

    async store (data) {
        return await Outlay.create(data);
    }

    async index () {
        return await Outlay.find();;
    }

    async show (_id) {
        return await Outlay.findById({ _id });
    }

    async update (id, updateItem) {
        return await Outlay.findByIdAndUpdate(id, updateItem, { new : true });
    }

    async destroy (id) {
        return await Outlay.findByIdAndDelete(id);
    }
}

module.exports = new outlayService();
import Outlay from '../Models/outlay.js';

// adicionar await nos metodos ao adicionar db;
class outlayServices {
    constructor () {

    }

    async store (data) {
        return await Outlay.create(data);
    }

    async index () {
        return await Outlay.find();;
    }

    async show (_id) {
        return await Outlay.findById(_id);
    }

    async update (id, updateItem) {
        return await Outlay.findByIdAndUpdate(id, updateItem, { new : true });
    }

    async destroy (id) {
        return await Outlay.findByIdAndDelete(id);
    }
}

module.exports = new outlayServices();
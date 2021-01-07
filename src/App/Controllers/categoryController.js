import Category from '../Models/categories.js';
class CategoryController {

    async storeMany (request, response) {
        response.json(await Category.insertMany(request.body.data));
    }

    async index (request, response) {
        response.json(await Category.find());
    }
}

module.exports = new CategoryController();
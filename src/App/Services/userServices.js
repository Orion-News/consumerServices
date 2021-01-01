const User = require('../Database/Models/user.js');

class userServices {
    async store (data) {
        const user = await User.create(data);
        user.password = undefined;
        return user
    }

    async verifyEmail(email) {
        if (await User.findOne({ email })) throw new Error('Deu ruim, Email já cadastrado!');
    }
}

module.exports = new userServices();
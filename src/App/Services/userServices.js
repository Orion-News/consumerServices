const User = require('../Database/Models/user.js');
const bcrypt = require('bcryptjs');
class userServices {
    async store (data) {
        const user = await User.create(data);
        user.password = undefined;
        return user
    }

    async verifyEmail(email) {
        if (await User.findOne({ email })) throw new Error('Deu ruim, Email já cadastrado!');
    }

    async Auth_ (email, password) {
        const searchUser =  await User.findOne({ email }).select('+password');

        if (!searchUser || !searchUser.email) throw new Error(`User not found`);

        if (!await bcrypt.compare(password, searchUser.password)) throw new Error(`Invalid Password`);

        searchUser.password = undefined;

        return searchUser;
    }

    async show (_id) {
        return await User.findById({ _id });
    }
}

module.exports = new userServices();
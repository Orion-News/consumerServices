const User = require('../Database/Models/user.js');

class userServices {
    async store (data) {
        return await User.create(data);
    }
}

module.exports = new userServices();
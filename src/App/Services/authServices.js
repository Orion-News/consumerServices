import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../Config/importsModel.js';

class Auth_ {

    async login (email, password) {
        const searchUser =  await User.findOne({ email }).select('+password');

        if (!searchUser || !searchUser.email) throw new Error(`User not found`);

        if (!await bcrypt.compare(password, searchUser.password)) throw new Error(`Invalid Password`);

        searchUser.password = undefined;
        const token = jwt.sign({ id : searchUser._id }, process.env.APP_SECRET, {
            expiresIn : '2min'
        })

        return {
            data : searchUser,
            token : token
        };
    }

}

module.exports = new Auth_();
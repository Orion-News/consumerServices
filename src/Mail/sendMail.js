import { createTransport } from 'nodemailer';
import 'dotenv/config';
// import GenerateItem from '../Config/functionLoca.js';

const {
    E_HOST,
    E_PORT,
    E_USER,
    E_USER_PASS
} = process.env;

class MailerForSend {
    constructor (){
        this.transportSmtp = createTransport({ host: E_HOST, port: E_PORT, auth: { user: E_USER, pass: E_USER_PASS } });
    }
    async loginAcessForEmail(email) {
        try {
            await this.transportSmtp.sendMail(email);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new MailerForSend();
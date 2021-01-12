import coin from '../../Robots/coin.js';
import mailTransport from '../../Mail/sendMail.js';

class Coin {
    async reponseOfCoin (request, response) {
        try {
            const { searchBefore, searchAfter, currency } = request.body.data;
            const searchCurrency = await coin.CurrencyConverterTo( searchBefore, searchAfter, currency );
            response.send(searchCurrency);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Coin();
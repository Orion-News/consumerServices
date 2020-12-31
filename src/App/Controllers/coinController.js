const coin = require('../../Robots/coin.js');
class Coin {
    async reponseOfCoin (request, response) {
        const { searchBefore, searchAfter, currency } = request.body.data;
        const searchCurrency = await coin.CurrencyConverterTo( searchBefore, searchAfter, currency );
        response.send(searchCurrency);
    }
}

module.exports = new Coin();
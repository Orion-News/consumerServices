const coin = require('../Robots/coin.js');
class Coin {
    async reponseOfCoin (request, response) {
        const { searchBefore, searchAfter } = request.body.data;
        const coins = await coin.CurrencyConverterTo( searchBefore, searchAfter );
        response.send(coins);
    }
}

module.exports = new Coin();
const coin = require('../Robots/coin.js');
class Coin {
    async reponseOfCoin (request, response) {
            const { searchBefore, searchAfter } = request.body.data;
            const coins = await coin.CurrencyConverterTo( searchBefore, searchAfter );
            response.send(`O valor para cada ${coins.searchCurrency}, ${ searchBefore } 
                        é igual a ${ coins.CurrencyOfSearch }, ${ searchAfter }`);
    }
}

module.exports = new Coin();
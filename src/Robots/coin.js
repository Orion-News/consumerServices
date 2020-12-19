const p = require('puppeteer');

class RobotCurrency {
    constructor() {

    }

    async CurrencyConverterTo(x,y) {
        const browser = await p.launch({ headless : true });
        const page = await browser.newPage();
        const url = `https://www.google.com/search?q=${x}+para+${y}&oq=${x}+para+${y}&aqs=chrome..69i57j0i10i131i433j0i10l6.2706j1j7&sourceid=chrome&ie=UTF-8`;
        await page.goto(url);
        const currencyOfConverter = await page.evaluate(() => {
            return {
                searchCurrency : document.querySelector('.ZEB7Fb.vk_gy.vk_sh.Hg3mWc').value,
                CurrencyOfSearch: document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
            }
        });
        await browser.close();

        return this.formatedString(currencyOfConverter, x, y);
    }

    formatedString (coins, searchBefore, searchAfter) {
        return `O valor para cada ${coins.searchCurrency}, ${ searchBefore } 
        é igual a ${ coins.CurrencyOfSearch }, ${ searchAfter }`
    }
    
}

module.exports = new RobotCurrency();
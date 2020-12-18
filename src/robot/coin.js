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
            const searchCurrency = document.querySelector('.ZEB7Fb.vk_gy.vk_sh.Hg3mWc').value
            const CurrencyOfSearch = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
            return {
                searchCurrency : searchCurrency,
                CurrencyOfSearch: CurrencyOfSearch
            }
        });
        await browser.close();

        return currencyOfConverter
    }
    
}

module.exports = new RobotCurrency();
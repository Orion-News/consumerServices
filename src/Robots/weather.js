const p = require('puppeteer');

class RobotWeather {
    constructor() {

    }
    
    async weatherSearchRobot(x) {
        const browser = await p.launch({ handless : false });
        const page = await browser.newPage();
        const url = `https://www.google.com/search?ei=gqLZX73EGN3C5OUPgPqAqAM&q=temperatura+em+${x}&oq=tempera`
        await page.goto(url);
        const searchWeather = await page.evaluate(() => {
            const tempWeather = document.querySelector('.vk_bk.wob-unit').firstElementChild
            return {
                searchWeather: document.querySelector('.wob_t.TVtOme').textContent,
                tempWeather: tempWeather.textContent
            }
        });
        await browser.close();

        return searchWeather
    }
    async metodoTeste() {
        const browser = await p.launch();
        const page = await browser.newPage();
        const url = `https://www.google.com/search?ei=gqLZX73EGN3C5OUPgPqAqAM&q=temperatura+em+manaus&oq=tempera`;
        await page.goto(url);

        const teste = await page.evaluate(() => {
            const limp = document.querySelector('.mod').getElementsByTagName('span');
                for(i=0; i< 11; i++ ) {
                    console.log(limp[i].textContent)
                }
        })
    }
}

module.exports = new RobotWeather();
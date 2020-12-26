const { deepEqual, ok } = require('assert');
const weatherRobots = require('../Robots/weather');
// variaveis para testes em busca da temperatura atual
const noContentAlreadyExpected = 'Fernando de noronha';


const local = 'São Paulo';
const contentAltreadyExpected = {
    "searchWeather": "22",
    "tempWeather": "°C"
  };

describe('deve busca temperatura', () => {

    it ('robo do clima, deve exibir a temperatura', async () => {
        const resultWeather = await weatherRobots.weatherSearchRobot(local);
        ok(resultWeather, contentAltreadyExpected);
    });
});


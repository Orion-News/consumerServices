const weather = require('../Robots/weather.js');
class Weather {
    constructor () {

    }

    async responseWeatherSearchRobot (req, res) {
        const weather_ = await weather.weatherSearchRobot( req.body.local );
        res.json(weather_);
    }
}

module.exports = new Weather();
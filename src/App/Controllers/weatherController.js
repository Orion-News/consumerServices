const weather = require('../../Robots/weather');
class Weather {
    constructor () {

    }

    async responseWeatherSearchRobot (req, res) {
        try{
            const weather_ = await weather.weatherSearchRobot( req.body.local );
            res.json(weather_);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Weather();
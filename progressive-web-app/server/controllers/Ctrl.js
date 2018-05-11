const axios = require("axios");

const getWeather = (req, res, next) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=dallas,tx,1&appid=416871977cf299500e97014a69960fb9`
    )
    .then(res => {
      res.status(200).json(response.data);
    })
    .catch();
};

module.exports = {
  getWeather
};

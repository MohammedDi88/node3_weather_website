const request = require('request');

let forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=a37db8298a8ba9e8d33f9ea13ade0361&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to conect to Weather service', undefined);
    } else if (body.error) {
      callback('Unable to find Location', undefined);
    } else {
      const data = body.current;

      const { temperature, feelslike } = data;

      let allData =
        data.weather_descriptions +
        `. it is currently ${temperature} degress out. It feels like ${feelslike} degress out`;

      callback(undefined, allData);
    }
  });
};

module.exports = forecast;

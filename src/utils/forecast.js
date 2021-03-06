const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7050803ce3b9706df43761047ca7a63e/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body } = {}) => {
        
        
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability*100}% chance of rain. Min Temp: ${body.daily.data[0].temperatureLow} °C. Max Temp: ${body.daily.data[0].temperatureHigh} °C.`)
        }
    })
}

module.exports = forecast

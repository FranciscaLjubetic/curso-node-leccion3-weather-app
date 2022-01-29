const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=5661732af624f6f815b0fc0a8b71fa0b&query=' +latitude+',' +longitude +'&units=m'
    request({url: url, json:true}, (error, { body })=>{
//{body} es un destructuring de response.body
        if(error){
            callback('Unable to connect with the server!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + 'C degrees out. there is a ' +body.current.feelslike + 'C  degrees sensation and a ' +body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast
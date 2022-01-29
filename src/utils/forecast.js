const request = require('request')
//apikey2= 
//apikey1=5661732af624f6f815b0fc0a8b71fa0b
const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=e19f3c19683c2c73c5ade72c4734a173&query=' +latitude+',' +longitude +'&units=m'
    request({url: url, json:true}, (error, { body })=>{
//{body} es un destructuring de response.body
        if(error){
            callback('Unable to connect with the server! 😬', undefined)
        } else if(body.error){
            callback('Unable to find location 🙃', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + 'ºC out. There is a ' +body.current.feelslike + 'ºC sensation and a ' +body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast
const request = require('request')


const geocode =(address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZnJhbmNpc2NhbGp1YmV0aWMiLCJhIjoiY2t5cjhiYjFiMGh0ZzJxczI1MjZjNzg4cSJ9.hO66sPS1sHu7KVubq1t2hQ&limit=1'

    request({ url:url, json:true}, (error, { body })=>{
        try{
            callback( undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                
            })

        }
        catch(error){
                callback('Unable to find location. Please, try another search.')
                return;
        }
        
    })
}

module.exports = geocode


//         console.log(body, 'hola')
//         if(error){
//         //low-level errors// body es un destructuring de response.body
//             callback('Unable to connect with the server!', undefined)
//         } else if(body.features.lenght === 0){
//         //no matching results
//             callback('Unable to find location. Please, try another search.', undefined)
            
//         } else{
//             callback( undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
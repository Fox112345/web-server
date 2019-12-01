const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidGVtb2hhIiwiYSI6ImNrMTBqeGg2eTA2OWMzb3FkZ2dzZGdtcm0ifQ.Ec99DzOn6qH-x5WjDsCYKA';

    request({url: url, json: true}, (error, response, body)=>{
        if(error || body.features.length===0){
            callback("Error, try another search!", undefined);
        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                langitude: body.features[0].center[1],
                location: body.features[0].place_name,
            });
        } 
    })    
}
module.exports = geocode
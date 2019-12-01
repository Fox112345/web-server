const request = require('request');

forecast = (coords, callback) => {

    const url = 'https://api.darksky.net/forecast/c0081b228c42a65ec84a91fecb51ab91/' + coords.langitude + ',' + coords.latitude + '?lang=ru&units=si';

    request({url: url, json: true}, (error, response, body)=>{
        if(error||response.body.error){
            callback("Ошибка", undefined);
        }else{
            callback(undefined, `Its ${body.currently.temperature} and ${body.currently.summary}`);
        } 
    })
}


module.exports = forecast
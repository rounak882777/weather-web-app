
const request = require('request')

const geoCode = function(address, callback){

    const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/ "+ address +".json?access_token=pk.eyJ1IjoiY2hldGFucGF3YXIiLCJhIjoiY2p3Z3R0MDhoMGNxdjQwbGJnajM2ZHo4byJ9.5azLiuRBvbXvy3xE0tDovw"


    request({ url: geoUrl, json: true }, (error, response) => {
    
        if (error) {
            callback('Unable to connect to location services!', undefined)

        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)

        }else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location :  response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode
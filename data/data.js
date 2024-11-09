const fetch = require('node-fetch');


const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const requestOptions  = {
    method: "GET",
    redirect: "follow"
};

async function requestWeather(city, datetime) {
    try{
        const response = await fetch(`${url}${city}/${datetime}?key=${process.env.API_KEY_SECRET}`, requestOptions);
        const result = await response.json();
        return result;

        } catch(error) {
            console.error("Error: ", error);
            return { error: "Can't obtain the weather"};
        }
};

module.exports = {
    requestWeather
}
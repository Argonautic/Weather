// used to access a url and turn it into a promise
import axios from 'axios'

const API_KEY = '8192986d26ed79a84092d795e1f58fb7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        // request is a promise, but our redux-promise middleware
        // will automatically process it into data
        payload: request,
    };
}
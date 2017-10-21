import axios from 'axios';

const API_KEY = '613d8c8f67851cacf38a13433dcd9f36';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ind`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

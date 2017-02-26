import AppConstant from '../constant';
import axios from 'axios';

const API_KEY = "366950d5398bc3d670f69be77c861d11";
const URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${API_KEY}`;

const fetchWeather = (city, country = 'India') => {
    const url = `${URL}&q=${city}`;
    const request = axios.get(url);
    return {
        type: AppConstant.FETCH_WEATHER,
        payload: request
    }
}

export {
    fetchWeather
}
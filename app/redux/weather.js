import axios from 'axios';
import {WEATHER_KEY} from '../../secrets';

/* ACTION TYPES */
const GET_FORECAST = 'GET_FORECAST';
const REMOVE_FORECAST = 'REMOVE_FORECAST';

/* INITIAL STATE */
const forecast = {};

/* ACTION CREATORS */
export const getForecast = forecast => ({ type: GET_FORECAST, forecast });
export const removeForecast = () => ({ type: REMOVE_FORECAST });

/* THUNK CREATOR */
export const requestForecast = zip =>
  dispatch => {
    return axios.get(`http://api.wunderground.com/api/${WEATHER_KEY}/forecast/q/${zip}.json`)
      .then(res => res.data)
      .then(({forecast}) => dispatch(getForecast(forecast)));
  };

/* REDUCER */
export default function (prevState=forecast, action) {

  switch(action.type) {

  case GET_FORECAST:
    return action.forecast;

  case REMOVE_FORECAST:
    return {};

  default:
    return prevState;
  }
}



import axios from 'axios';

/* ACTION TYPES */
const GET_STATION_NORMS = 'GET_STATION_NORMS';
const REMOVE_STATION_NORMS = 'REMOVE_STATION_NORMS';

/* INITIAL STATE */
const norms = {};

/* ACTION CREATORS */
export const getNorms = norms => ({ type: GET_STATION_NORMS, norms });
export const removeNorms = () => ({ type: REMOVE_STATION_NORMS });

/* THUNK CREATOR */
export const requestNorms = zip =>
  dispatch => {
    return axios.get(`/api/weather/zip/${zip}`)
      .then(res => res.data)
      .then(station => dispatch(getNorms(station)))
      .catch(console.error);
  };

/* REDUCER */
export default function (prevState=norms, action) {

  switch(action.type) {

  case GET_STATION_NORMS:
    return action.norms;

  case REMOVE_STATION_NORMS:
    return {};

  default:
    return prevState;
  }
}



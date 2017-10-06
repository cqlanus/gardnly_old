import axios from 'axios';

/* ACTION TYPES */
const GET_GARDEN = 'GET_GARDEN';
const REMOVE_GARDEN = 'REMOVE_GARDEN';

/* INITIAL STATE */
const selectedGarden = {};

/* ACTION CREATORS */
export const getGarden = garden => ({ type: GET_GARDEN, garden });
export const removeGarden = () => ({ type: REMOVE_GARDEN });

/* THUNK CREATOR */
export const requestGarden = gardenId =>
  dispatch => {
    return axios.get(`/api/gardens/${gardenId}`)
      .then(res => res.data)
      .then(garden => dispatch(getGarden(garden)));
  };

/* REDUCER */
export default function (prevState=selectedGarden, action) {

  switch(action.type) {
  
  case GET_GARDEN:
    return action.garden;

  case REMOVE_GARDEN:
    return {};

  default:
    return prevState;
  }
}



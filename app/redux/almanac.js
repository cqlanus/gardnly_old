import axios from 'axios';

/* ACTION TYPES */
const GET_HISTORY = 'GET_HISTORY';
const REMOVE_HISTORY = 'REMOVE_HISTORY';
const GET_FIELD = 'GET_FIELD';
const REMOVE_FIELD = 'REMOVE_FIELD';

/* INITIAL STATE */
const history = {
  field: {},
  data: {}
};

/* ACTION CREATORS */
export const getHistory = history => ({ type: GET_HISTORY, history });
export const removeHistory = () => ({ type: REMOVE_HISTORY });
export const getField = field => ({ type: GET_FIELD, field });
export const removeField = () => ({ type: REMOVE_FIELD });

/* THUNK CREATOR */
export const requestField = zip =>
  dispatch => {
    axios.post(`api/awhere/${zip}`)
      .then(res => res.data)
      .then(field => {
        console.log(field);
        dispatch(getField(field));
      })
      .catch(console.error);
  };

export const getAllFields = () =>
  dispatch => {
    axios.get('api/awhere/')
      .then(res => res.data)
      .then(field => {
        console.log(field);
        dispatch(getField(field));
      })
      .catch(console.error);
  };

/* REDUCER */
export default function (prevState=history, action) {
  let newState = Object.assign({}, prevState);
  switch(action.type) {

  case GET_HISTORY:
    newState.data = action.history;
    return newState;

  case REMOVE_HISTORY:
    newState.data = {};
    return newState;

  default:
    return prevState;
  }
}



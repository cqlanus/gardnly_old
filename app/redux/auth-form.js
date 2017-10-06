/* ACTION TYPES */
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';

/* INITIAL STATE */
const formsShown = {
  login: false,
  signup: false,
};

/* ACTION CREATORS */
export const toggleLogin = (toShow) => ({type: TOGGLE_LOGIN, toShow});
export const toggleSignup = (toShow) => ({type: TOGGLE_SIGNUP, toShow});


/* REDUCER */
export default function (state=formsShown, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

  case TOGGLE_LOGIN:
    console.log('toggling');
    newState.login = action.toShow;
    return newState;

  case TOGGLE_SIGNUP:
    newState.signup = action.toShow;
    return newState;

  default:
    return newState;
  }
}
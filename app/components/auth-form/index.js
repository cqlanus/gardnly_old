
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth, toggleLogin, toggleSignup} from '../../redux';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    hideAll
  } = props;


  return (
    <div className="loginForm">
      <span
        className="closeBtn"
        onClick={hideAll}
      >&times;</span>
      <form onSubmit={handleSubmit} name={name} className="modal-content">
        <div className="imgContainer">
          <div className="img"></div>
        </div>
        <div>
          <label htmlFor='email'><small>Email</small></label>
          <input name='email' type='text' className="email"/>
        </div>
        <div>
          <label htmlFor='password'><small>Password</small></label>
          <input name='password' type='password' className="pass"/>
        </div>
        <div>
          <button type='submit'>{displayName}</button>
          <button><a href='/auth/google'>{displayName} with Google</a></button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
      dispatch(toggleLogin(false));
      dispatch(toggleSignup(false));
    },
    hideAll() {
      console.log('called');
      dispatch(toggleLogin(false));
      dispatch(toggleSignup(false));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  hideAll: PropTypes.func
};
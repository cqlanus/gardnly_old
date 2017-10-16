import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {toggleLogin, toggleSignup} from '../../redux';

const Splash = ({isLoggedIn, showLogin, showSignup}) => (

  <div className="splash">
    <div className="splash-text">
      <h1>gardnly</h1>
      <p>share your bounty</p>
      {
        isLoggedIn ?
          <div>
            <Link to="/home"><button className="full">go home</button></Link>
          </div>
          : <div className="btnContainer">
            <button name="login" onClick={showSignup}>sign up</button>
            <button name="signup" onClick={showLogin}>log in</button>
          </div>
      }
    </div>
  </div>

);

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    showLogin() {
      dispatch(toggleLogin(true));
    },
    showSignup() {
      dispatch(toggleSignup(true));
    }
  };
};

export default connect(mapState, mapDispatch)(Splash);

Splash.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  showLogin: PropTypes.func.isRequired,
  showSignup: PropTypes.func.isRequired,
};
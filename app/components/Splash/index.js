import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const Splash = ({isLoggedIn}) => (

  <div className="splash">
    <div className="splash-text">
      <h1>gardnly</h1>
      <p>share your bounty</p>
      {
        isLoggedIn ?
          <div>
            <button><Link to="/home">go home</Link></button>
          </div>
          : <div>
            <button>sign up</button>
            <button>log in</button>
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

export default connect(mapState, null)(Splash);

Splash.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout, toggleLogin, toggleSignup} from '../../redux';


const NavBar = props => {
  const {isLoggedIn, handleClick, showLogin, showSignup} = props;

  return (
    <div className="navbar">
      <div className="brand">gardnly</div>
      <nav >
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to='/home' className="link">Home</Link>
              <a href='#'>Profile</a>
              <a href='#'>Messages</a>
              <a href='#' onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <a href='#' name="login" onClick={showLogin}>Login</a>
              <a href='#' name="signup" onClick={showSignup}>Sign Up</a>
            </div>
        }
      </nav>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout());
    },
    showLogin() {
      dispatch(toggleLogin(true));
    },
    showSignup() {
      dispatch(toggleSignup(true));
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(NavBar));

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  showLogin: PropTypes.func,
  showSignup: PropTypes.func,
};
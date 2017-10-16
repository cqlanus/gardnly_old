import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout, toggleLogin, toggleSignup} from '../../redux';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaHome from 'react-icons/lib/fa/home';
import FaUser from 'react-icons/lib/fa/user';

const NavBar = props => {
  const {isLoggedIn, handleClick, showLogin, showSignup} = props;

  return (
    <div className="navbar">
      <div className="brand"><Link to="/">gardnly</Link></div>
      <nav >
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to='/home' className="link icon"><FaHome /></Link>
              <a className="link icon" href='#'><FaUser /></a>
              <a className="link icon" href='#'><FaEnvelopeO /></a>
              <a className="link" href='#' onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <a className="link" href='#' name="login" onClick={showLogin}>Login</a>
              <a className="link" href='#' name="signup" onClick={showSignup}>Sign Up</a>
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

export default connect(mapState, mapDispatch)(NavBar);

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  showLogin: PropTypes.func,
  showSignup: PropTypes.func,
};
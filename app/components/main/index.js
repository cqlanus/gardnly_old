import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NavBar from '../NavBar';
import {Login, Signup} from '../auth-form';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    const children = this.props.children;
    return (
      <div className="main">
        <NavBar />
        {this.props.showLogin && <Login />}
        {this.props.showSignup && <Signup />}
        {children}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    showLogin: state.authForm.login,
    showSignup: state.authForm.signup,
  };
};

export default connect(mapState, null)(Main);

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  showLogin: PropTypes.bool,
  showSignup: PropTypes.bool,
};


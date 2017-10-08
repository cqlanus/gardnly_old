import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import NavBar from '../NavBar';
import Splash from '../Splash';
import UserHome from '../UserHome';
import {Login, Signup} from '../auth-form';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <NavBar />
        {this.props.showLogin && <Login />}
        {this.props.showSignup && <Signup />}
        <Switch>
          <Route exact={true} path="/" component={Splash} />
          <Route path="/home" component={UserHome} />
          <Redirect to="/" />
        </Switch>
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

export default withRouter(connect(mapState, null)(Main));

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  showLogin: PropTypes.bool,
  showSignup: PropTypes.bool,
};


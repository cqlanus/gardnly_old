import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Dashboard from '../Dashboard';
// import Sidebar from '../Sidebar';
import {meAndData, me} from '../../redux';


/**
 * COMPONENT
 */
class UserHome extends Component {

  render() {
    const {email} = this.props;
    return (
      <div className="container">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    );
  }

}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      console.log('getting called');
      dispatch(me());
    }
  };
};

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string
};
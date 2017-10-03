import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Dashboard from '../Dashboard';
// import Sidebar from '../Sidebar';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props;

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
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
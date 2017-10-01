import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Sidebar = props => (
  <div>
    <h3>I am a sidebar</h3>
    <div>New Garden</div>
    <div>My Gardens</div>
    <div>Community Gardens</div>
  </div>
);

Sidebar.propTypes = {
  name: PropTypes.string,
};

export default Sidebar;
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GardenSummary = props => (
  <div>
    <h2>I am a garden summary.</h2>
  </div>
);

GardenSummary.propTypes = {
  name: PropTypes.string,
};

export default GardenSummary;
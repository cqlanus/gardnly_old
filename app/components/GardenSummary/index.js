import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GardenSummary = ({garden}) => (
  <div>
    <h2>Garden</h2>
    <div>Name: {garden.name}</div>
    <div>Location: {garden.description}</div>
    {
      garden.plots.map(plot => <div key={plot.id}>Plot: {plot.name}</div>)
    }
  </div>
);

GardenSummary.propTypes = {
  garden: PropTypes.object,
};

export default GardenSummary;
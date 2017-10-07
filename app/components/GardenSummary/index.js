import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlotCard from '../PlotCard';

const GardenSummary = ({garden}) => (
  <div className="gardenSummary">
    {garden.id && <h2>Garden</h2>}
    <div>Name: {garden.name}</div>
    <div>Location: {garden.description}</div>
    {
      garden.plots && garden.plots.map(plot =>
        <div className="plots quarter" key={plot.id}>
          <PlotCard plot={plot} />
        </div>
      )
    }
  </div>
);

GardenSummary.propTypes = {
  garden: PropTypes.object.isRequired,
};

const mapState = state => {
  return {
    garden: state.garden,
  };
};

export default connect(mapState, null)(GardenSummary);
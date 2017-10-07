import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PlotCard from '../PlotCard';

const GardenSummary = ({garden}) => (
  <div className="gardenSummary">
    <h2>Garden: {garden.name}</h2>
    <div><em>{garden.description}</em></div>
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
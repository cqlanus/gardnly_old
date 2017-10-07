import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PlotCard = ({plot}) => (
  <div className="plotCard">
    <div className="img"></div>
    <div className="details">
      <div className="soilBar">
        <div className="nit third">{plot.soilN}</div>
        <div className="phos third">{plot.soilP}</div>
        <div className="potash third">{plot.soilK}</div>
      </div>
      <div className="soilBar">
        <div className="pH third">{plot.soilPh}</div>
        <div className="texture third">{plot.soilTexture}</div>
        <div className="sun third">{plot.sunExposure}</div>
      </div>

      <h4>{plot.name}</h4>
    </div>
  </div>
);

const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {};
};

PlotCard.propTypes = {
  plot: PropTypes.object.isRequired,
};

export default connect(mapState, mapDispatch)(PlotCard);
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PlotCard = ({plot}) => (
  <div className="plotCard">
    <div className="img"></div>
    <div className="details">
      <div className="soilBar">
        <div className="nit third">
          <div className="title">N</div>
          <div className="text">{plot.soilN}</div>
        </div>
        <div className="phos third">
          <div className="title">P</div>
          <div className="text">{plot.soilP}</div>
        </div>
        <div className="potash third">
          <div className="title">K</div>
          <div className="text">{plot.soilK}</div>
        </div>
      </div>
      <div className="soilBar">
        <div className="pH third">
          <div className="title">pH</div>
          <div className="text">{plot.soilPh}</div>
        </div>
        <div className="texture third">
          <div className="title">txtr</div>
          <div className="text">{plot.soilTexture}</div>
        </div>
        <div className="sun third">
          <div className="title">sun</div>
          <div className="text">{plot.sunExposure}</div>
        </div>
      </div>

      <h3>{plot.name}</h3>
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
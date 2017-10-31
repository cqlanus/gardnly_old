import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {requestNorms} from '../../redux';
import LineGraph from './LineGraph';

class WeatherNorms extends Component {

  componentDidMount() {
    this.props.getWeatherNorms(this.props.zip);
  }

  render() {
    return (
      <div>
        <h3>Weather Norms</h3>
        {this.props.norms.daily && <LineGraph norms={this.props.norms} />}
      </div>
    );
  }
}

const mapState = state => {
  return {
    norms: state.weatherNorms,
  };
};

const mapDispatch = dispatch => {
  return {
    getWeatherNorms(zip) {
      dispatch(requestNorms(zip));
    }
  };
};


WeatherNorms.propTypes = {
  zip: PropTypes.string,
  norms: PropTypes.object,
  getWeatherNorms: PropTypes.func,
};

export default connect(mapState, mapDispatch)(WeatherNorms);
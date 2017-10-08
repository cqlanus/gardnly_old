import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestForecast} from '../../redux';
import WeatherCard from '../WeatherCard';

class ForecastSummary extends React.Component {
  componentDidMount() {
    this.props.getForecast(60625);
  }

  render() {
    const {forecast} = this.props;
    console.log('forecast', forecast);
    return (
      <div className="forecastCard">
        <h2>Forecast Summary</h2>
        <div className="cardContainer">
          {
            forecast && forecast.forecastday.map(day => {
              return (
                <div key={day.date.epoch} className="card">
                  <WeatherCard day={day} />
                </div>);
            })
          }
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    forecast: state.weather.simpleforecast,
  };
};

const mapDispatch = dispatch => {
  return {
    getForecast(zip) {
      dispatch(requestForecast(zip));
    }
  };
};

export default connect(mapState, mapDispatch)(ForecastSummary);

ForecastSummary.propTypes = {
  forecast: PropTypes.object,
  getForecast: PropTypes.func,
};
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const WeatherCard = ({day}) => {
  const dayStr = `${day.date.weekday}`;
  return (
    <div className="weatherCard">
      <div>
        <h3>{dayStr}</h3>
      </div>
      <div className="condition">
        <div className="icon">
          <Icon icon={day.icon} />
        </div>
      </div>
      <div className="details">
        <div>High: {day.high.fahrenheit} | Low: {day.low.fahrenheit}</div>
        <div>Rain: {day.pop + '%'} | {day.qpf_allday.in + ' in.'}</div>
        <div>Wind: {day.avewind.mph + ' mph ' + day.avewind.dir}</div>
        <div>Humidity: {day.avehumidity}%</div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  day: PropTypes.object.isRequired,
};

export default WeatherCard;
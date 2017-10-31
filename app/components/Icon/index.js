import React from 'react';
import PropTypes from 'prop-types';
import Clear from 'react-icons/lib/ti/weather-sunny';
import PartlySunny from 'react-icons/lib/ti/weather-partly-sunny';
import Cloudy from 'react-icons/lib/ti/weather-cloudy';
import Downpour from 'react-icons/lib/ti/weather-downpour';
import LightRain from 'react-icons/lib/ti/weather-shower';
// import Snow from 'react-icons/lib/ti/weather-snow';
import Storm from 'react-icons/lib/ti/weather-stormy';
// import WindyCloudy from 'react-icons/lib/ti/weather-windy-cloudy';
import Windy from 'react-icons/lib/ti/weather-windy';

const Icon = ({icon}) => {

  switch (icon) {
  case 'full':
    return <Clear />;
  case 'clear':
    return <Clear />;
  case 'chancerain':
    return <LightRain />;
  case 'part':
    return <PartlySunny />;
  case 'partlycloudy':
    return <PartlySunny />;
  case 'mostlycloudy':
    return <PartlySunny />;
  case 'shade':
    return <Cloudy />;
  case 'rain':
    return <Downpour />;
  case 'chancestorms':
    return <Storm />;
  case 'wind':
    return <Windy />
  case 'cloudy':
    return <Cloudy />;


  default:
    return <div></div>;
  }
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

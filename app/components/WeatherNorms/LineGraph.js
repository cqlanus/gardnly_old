import React, {Component} from 'react';
import {XAxis, YAxis} from './Axis';

class LineGraph extends Component {
  constructor() {
    super();
  }

  render() {
    const margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    };

    const height = 400, width = 700;
    return (
      <svg width={width} height={height}>
        <YAxis x={margin.left} y={margin.top} margin={margin}/>
        <XAxis x={margin.left} y={height - margin.bottom} margin={margin}/>
      </svg>
    );
  }
}

export default LineGraph;
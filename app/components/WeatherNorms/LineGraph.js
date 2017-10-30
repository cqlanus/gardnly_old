import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {XAxis, YAxis} from './Axis';
import {Line} from './Line';
import _ from 'lodash';
import {scaleLinear} from 'd3-scale';
import BackgroundBlocks from './BackgroundBlocks';

class LineGraph extends Component {
  constructor() {
    super();
  }

  render() {
    const margin = {
      top: 20,
      bottom: 20,
      left: 30,
      right: 20
    };
    const maxTemp = _.max(this.props.norms.daily.maxTemps);
    const xScale = scaleLinear()
    .domain([0,380])
    .range([0, 670]);

    const yScale = scaleLinear()
    .domain([(maxTemp+20),0])
    .range([0,360]);

    const height = 400, width = 700;
    const tempsMax = this.props.norms.daily.maxTemps.filter(temp => !!temp && temp > 0);
    const tempsMin = this.props.norms.daily.minTemps.filter(temp => !!temp && temp > 0);
    return (
    <div>
      <svg width={width} height={height}>
        <BackgroundBlocks
          height={height}
          margin={margin}
        />
        <YAxis
          x={margin.left}
          y={margin.top}
          margin={margin}
          scale={yScale}
        />
        <XAxis
          x={margin.left}
          y={height - margin.bottom}
          margin={margin}
          scale={xScale}
        />
        <Line
          x={margin.left}
          y={margin.top}
          xScale={xScale}
          yScale={yScale}
          temps={tempsMax} />
        <Line
          x={margin.left}
          y={margin.top}
          xScale={xScale}
          yScale={yScale}
          temps={tempsMin} />
      </svg>
    </div>
    );
  }
}

LineGraph.propTypes = {
  norms: PropTypes.object,
};

export default LineGraph;

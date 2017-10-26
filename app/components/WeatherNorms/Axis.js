import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {scaleLinear} from 'd3-scale';
import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';

const D3blackbox = (D3render) => {
  return class Blackbox extends Component {
    componentDidMount() { D3render.call(this); }
    componentDidUpdate() { D3render.call(this); }

    render() {
      const { x, y } = this.props;
      return <g transform={`translate(${x}, ${y})`} ref={anchor => this.anchor = anchor} />;
    }
  };
};

D3blackbox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export const XAxis = D3blackbox(function() {
  const scale = scaleLinear()
    .domain([0,20])
    .range([0, 600]);

  const axis = axisBottom(scale);

  select(this.anchor)
    .call(axis);
});


export const YAxis = D3blackbox(function() {
  const scale = scaleLinear()
    .domain([10,0])
    .range([0,360]);

  const axis = axisLeft(scale);

  select(this.anchor)
    .call(axis);
});



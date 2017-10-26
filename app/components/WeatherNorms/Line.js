import React from 'react';
import {line} from 'd3-shape';
import {select} from 'd3-selection';
import {D3blackbox} from '../d3/utils';

export const Line = D3blackbox(function() {
  const data = this.props.temps;
  const d3Line = line()
    .x((d,i) => this.props.xScale(i))
    .y(d => this.props.yScale(d));

  const linePath = d3Line(data);

  select(this.anchor)
    .append('path')
    .attr('d', linePath)
    .classed('line', true);
});
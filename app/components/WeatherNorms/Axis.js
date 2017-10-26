import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';
import {D3blackbox} from '../d3/utils';

export const XAxis = D3blackbox(function() {
  const scale = this.props.scale;
  const axis = axisBottom(scale);

  select(this.anchor)
    .call(axis);
});


export const YAxis = D3blackbox(function() {
  const scale = this.props.scale;
  const axis = axisLeft(scale);

  select(this.anchor)
    .call(axis);
});



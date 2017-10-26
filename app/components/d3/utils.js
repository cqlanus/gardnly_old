import React, {Component} from 'react';
import PropTypes from 'prop-types';


export const D3blackbox = (D3render) => {
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
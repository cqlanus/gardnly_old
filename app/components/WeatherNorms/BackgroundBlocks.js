import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* TODO:
 * create rects for the following:
 *    growing season - green
 *    first frost range - yellow (or light blue?)
 *    last frost range- yellow (or light blue?)
 *    non-growing season - blue (or purple?)
 *
 * */

class BackgroundBlocks extends Component {

  render() {
    const boxHeight = this.props.height - this.props.margin.bottom - this.props.margin.top;
    console.log(boxHeight);
    return (
      <g stroke="black" fill="#aaa" strokeWidth="2">
        <rect x={this.props.margin.left + 20} y={this.props.margin.top} height={boxHeight} width="50"/>
        <rect x="120" y="120" height="50" width="50"/>

      </g>
    )
  }
}

BackgroundBlocks.propTypes = {
  height: PropTypes.number,
  margin: PropTypes.object,
}
export default BackgroundBlocks;


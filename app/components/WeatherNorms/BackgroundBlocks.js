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
    const leftMost = this.props.margin.left + 20;
    const topMost = this.props.margin.top;
    console.log(this.props.norms);

    return (
      <g stroke="black" fill="#aaa" strokeWidth="0">
        <rect x={leftMost} y={topMost} height={boxHeight} width="50" className="growingSeason"/>
        <rect x="120" y="120" height="50" width="50"/>

      </g>
    )
  }
}

BackgroundBlocks.propTypes = {
  height: PropTypes.number,
  margin: PropTypes.object,
  norms: PropTypes.object,
}
export default BackgroundBlocks;


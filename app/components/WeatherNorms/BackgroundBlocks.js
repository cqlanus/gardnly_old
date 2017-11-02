import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/* TODO:
 * create rects for the following:
 *    growing season - green
 *    first frost range - yellow (or light blue?)
 *    last frost range- yellow (or light blue?)
 *    non-growing season - blue (or purple?)
 *
 * */

class BackgroundBlocks extends Component {

  calcDayNum(dateStr) {
    return moment(dateStr).dayOfYear();
  }

  render() {
    const stationData = this.props.norms.station;
    const xScale = this.props.xScale;

    const firstFrost = this.calcDayNum(stationData.first_frost_90);
    const firstFrostScaled = xScale(firstFrost);

    const lastFrost = this.calcDayNum(stationData.last_frost_90);
    const lastFrostScaled = xScale(lastFrost);

    const betweenFrosts = firstFrostScaled - lastFrostScaled;

    // const growingSeason = stationData.season_length_90;

    const boxHeight = this.props.height - this.props.margin.bottom - this.props.margin.top;
    const leftMost = this.props.margin.left;
    const topMost = this.props.margin.top;

    console.log(this.props.norms);

    return (
      <g stroke="black" fill="#aaa" strokeWidth="0">
        <rect
          x={leftMost}
          y={topMost}
          height={boxHeight}
          width={lastFrostScaled}
          className="coldSeason"/>
        <rect
          x={leftMost + lastFrostScaled}
          y={topMost}
          height={boxHeight}
          width={betweenFrosts}
          className="growingSeason"/>
        <rect
          x={leftMost + lastFrostScaled + betweenFrosts}
          y={topMost}
          height={boxHeight}
          width={365-firstFrostScaled}
          className="coldSeason"/>

      </g>
    );
  }
}

BackgroundBlocks.propTypes = {
  height: PropTypes.number,
  margin: PropTypes.object,
  norms: PropTypes.object,
  xScale: PropTypes.func,
};
export default BackgroundBlocks;


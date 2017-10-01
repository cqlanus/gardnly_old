import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GardenSummary from '../GardenSummary';
import Sidebar from '../Sidebar';

const mapStateToProps = (state) => {
  return {
    name: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am a dashboard</h1>
        <div>{this.props.name}</div>
        <GardenSummary />
        <Sidebar />
      </div>
    );
  }
}

Dashboard.propTypes = {
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
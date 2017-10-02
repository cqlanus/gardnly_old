import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GardenSummary from '../GardenSummary';

const mapStateToProps = (state) => {
  return {
    name: state.user.email,
    gardens: state.user.gardens,
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
      <div >
        <h1>Dashboard</h1>
        {
          this.props.gardens &&
          this.props.gardens.map(garden => <GardenSummary key={garden.id} garden={garden}/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  name: PropTypes.string,
  gardens: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
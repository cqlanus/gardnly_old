import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Dashboard from '../Dashboard';
// import Sidebar from '../Sidebar';
import VertTabs from '../VertTabs';
import GardenSummary from '../GardenSummary';
import {meAndData} from '../../redux';
import {withRouter} from 'react-router-dom';


/**
 * COMPONENT
 */
class UserHome extends Component {

  render() {
    const {gardens, hasGarden} = this.props;
    return (
      <div className="container">
        <div className="column">
          <VertTabs tabs={gardens} />
        </div>
        <div className="gardenSummary">
          { hasGarden && <GardenSummary />}
        </div>
      </div>
    );
  }

}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email,
    gardens: state.user.gardens,
    hasGarden: !!state.garden.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(meAndData());
    }
  };
};

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  gardens: PropTypes.array,
  hasGarden: PropTypes.bool.isRequired,
};
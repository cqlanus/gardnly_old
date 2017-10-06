import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Dashboard from '../Dashboard';
// import Sidebar from '../Sidebar';
import VertTabs from '../VertTabs';
import {meAndData} from '../../redux';


/**
 * COMPONENT
 */
class UserHome extends Component {

  render() {
    const {gardens} = this.props;
    return (
      <div className="container">
        <VertTabs tabs={gardens} />
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      console.log('getting called');
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
};
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestGarden} from '../../redux';


const VertTabs = ({tabs, fetchGarden}) => (
  <div className="vertTabs">
    {
      tabs && tabs.map(tab =>
        <button
          key={tab.id}
          className="tabLinks"
          id={tab.id}
          onClick={() => fetchGarden(tab.id)}
        >{tab.name}</button>)
    }
  </div>
);

VertTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  fetchGarden: PropTypes.func.isRequired
};


const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {
    fetchGarden(id) {
      dispatch(requestGarden(id));
    }
  };
};

export default connect(mapState, mapDispatch)(VertTabs);